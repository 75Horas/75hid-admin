import { Button, Container, Image, Modal } from "react-bootstrap";
import { Body_Get } from "./index.style";

import logo from "/assets/image/logo.webp";
import List from "rc-virtual-list";
import { useEffect, useState } from "react";
import { deleteUpdate, getUpdates } from "../../js/firebase";

import { BsTwitterX } from "react-icons/bs";
import { FaInbox } from "react-icons/fa6";
import { FaPen, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function GetUpdates() {
    const navigate = useNavigate();
    const [updates, setUpdates] = useState(null);
    const [updatesLength, setUpdatesLength] = useState(0);
    const [deleteUpdateId, setDeleteUpdateId] = useState("");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleDelete = () => {
        setShow(false)
        console.log(deleteUpdateId);
        deleteUpdate(deleteUpdateId)
    };
    const handleShow = (id) => {
        setShow(true)
        setDeleteUpdateId(id)
    };

    useEffect(() => {
        if (updates === null) {
            getUpdates().then((res) => {
                if (Array.isArray(res)) {
                    setUpdates(res);
                    console.log([res]);
                    setUpdatesLength(res.length);
                } else {
                    console.error(res);
                }
            }).catch((error) => {
                console.error(error);
            })
        }
    }, []);

    return (
        <Body_Get>
            <Container>
                <Image
                    className="logo"
                    src={logo}
                    alt={logo}
                    draggable={false}
                />

                {updates !== null ? (
                    <List
                        data={updates}
                        height={"50vh"}
                        itemHeight={30}
                        itemKey="id"
                    >
                        {index =>
                            <div key={index.id} className="update-containter">
                                <div className="update-banner-container">
                                    <Image
                                        className="update-banner"
                                        src={index.banner}
                                        alt={index.banner}
                                        loading="lazy"
                                        draggable={false}
                                    />
                                </div>
                                <div className="contents-container">
                                    <div className="update-details">
                                        <h2>{index.title}</h2>
                                        <p>{index.description}</p>
                                        <p>{index.date}</p>
                                    </div>
                                    <div className="icon-container">
                                        <BsTwitterX className="icon" onClick={() => { window.open(index.url, "_blank") }} />
                                        <FaPen className="icon" onClick={() => { }} />
                                        <FaTrash className="icon trash" onClick={() => { handleShow(index.id) }} />
                                    </div>
                                </div>
                            </div>
                        }
                    </List>
                ) : (
                    <div className="empty-list">
                        <FaInbox size={"96px"} />
                        <p>No update available, click the button below to add a new update</p>
                    </div>
                )}
                <div className="button-container">
                    <Button variant="outline-primary"
                        onClick={() => navigate("/post")}
                    >
                        Post new update
                    </Button>
                </div>
            </Container>

            <Modal show={show} onHide={handleClose} centered >
                <Modal.Header closeButton>
                    <Modal.Title>Deleting update</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this update? it will be deleted forever.</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="outline-danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </Body_Get >
    )
}