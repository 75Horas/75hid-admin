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
import { UpdatesList } from "../../components/Updates/List";
import { CollaboratorsList } from "../../components/Collaborators/List";

export function GetUpdates() {
    const baseUrl = "https://75hid-api-production.up.railway.app/admin"
    const navigate = useNavigate();
    const [updates, setUpdates] = useState(null);
    const [updateID, setUpdateID] = useState("");
    const [selected, setSelected] = useState("updates");

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
                setUpdates(data.length === 0 ? null : data);
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
                <div>
                    <div className="buttons-container">
                        <Button onClick={() => { setSelected("updates") }} className={`${selected === "updates" ? "selected-button" : ""} btn-filter`}>UPDATES</Button>
                        <Button onClick={() => { setSelected("collaborators") }} className={`${selected === "collaborators" ? "selected-button" : ""} btn-filter`}>COLLABORATORS</Button>
                    </div>
                    {selected === "updates" ? (
                        <UpdatesList updates={updates} />
                    ) : (
                        <CollaboratorsList collaborators={updates} />
                    )}
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