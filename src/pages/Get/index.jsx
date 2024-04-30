import { Button, Container, Image, Modal } from "react-bootstrap";
import { Body_Get } from "./index.style";

import logo from "/assets/image/logo.webp";
import List from "rc-virtual-list";
import { useEffect, useState } from "react";

import { BsTwitterX } from "react-icons/bs";
import { FaInbox } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function GetUpdates() {
    const baseUrl = "https://75hid-api-production.up.railway.app/admin"
    const navigate = useNavigate();
    const [updates, setUpdates] = useState(null);
    const [updateID, setUpdateID] = useState("");

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        setUpdateID("");
    };

    const handleShow = (id) => {
        setUpdateID(id)
        setShow(true)
    }

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`${baseUrl}/updates/delete`, {
                data: { id: updateID }
            })
            if (response.status === 200) {
                console.log("Update deleted successfully");
            } else {
                console.error("Error deleting update", response.data.error);
            }
        } catch (error) {
            console.error('Error during deletion:', error);
        }

        setShow(false)
    };

    useEffect(() => {
        const fetchUpdates = async () => {
            try {
                const response = await axios.get(`${baseUrl}/updates`);
                const data = await response.data

                setUpdates(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchUpdates();
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
                                        alt={`Update Banner for ${index.id}`}
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