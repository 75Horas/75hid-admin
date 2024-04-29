import { Button, CloseButton, FloatingLabel, Form, Image, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Body_PostUpdate } from "./index.style";

import logo from "/assets/image/logo.webp";
import { useState } from "react";
import { UpdateCard } from "../../components/Updates/UpdateCard";
import { useNavigate } from "react-router-dom";

export function PostUpdate() {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");
    const [banner, setBanner] = useState("");
    const [steam, setSteam] = useState(false);
    const [epicgames, setEpicgames] = useState(false);
    const [xbox, setXbox] = useState(false);
    const [playstation, setPlaystation] = useState(false);

    const [showPreview, setShowPreview] = useState(false);

    const update = {
        title,
        description,
        url,
        banner,
        steam,
        epicgames,
        xbox,
        playstation,
    };

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            .webp images preferred<br />
            max size 6MB.
        </Tooltip>
    );

    async function handlePostUpdate() {
        event.preventDefault();

        const formData = new FormData()
        formData.append("title", title);
        formData.append("description", description);
        formData.append("url", url);
        formData.append("steam", steam);
        formData.append("epicgames", epicgames);
        formData.append("xbox", xbox);
        formData.append("playstation", playstation);
        formData.append("banner", banner);
        formData.append("date", new Date().toUTCString())

        try {
            const response = await axios.post("url", formData);
            navigate("/");
        } catch (error) {
            console.error("Upload failed!", error);
        }
    }

    return (
        <Body_PostUpdate id="/post">
            <CloseButton variant="white" onClick={() => {
                navigate("/");
            }} />

            <Form onSubmit={handlePostUpdate}>
                <Image
                    className="logo"
                    src={logo}
                    alt={logo}
                    draggable={false}
                />

                <FloatingLabel
                    controlId="floatingInput"
                    label="Update title"
                    className="mb-3"
                >
                    <Form.Control
                        required
                        type="text"
                        placeholder="enter update title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Update description"
                    className="mb-3"
                >
                    <Form.Control
                        required
                        type="textarea"
                        placeholder="enter update description"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Update twitter url"
                    className="mb-3"
                >
                    <Form.Control
                        required
                        type="text"
                        placeholder="enter update twitter url"
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </FloatingLabel>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Update banner</Form.Label>
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                    >
                        <Form.Control type="file" onChange={(e) => setBanner(e.target.files[0])} />
                    </OverlayTrigger>
                </Form.Group>

                <Form.Group className="mb-3 checkbox-container">
                    <Form.Check
                        type="checkbox"
                        label="Steam"
                        onChange={(e) => setSteam(e.target.checked)}
                    />
                    <Form.Check
                        type="checkbox"
                        label="Epic Games"
                        onChange={(e) => setEpicgames(e.target.checked)}
                    />
                    <Form.Check
                        type="checkbox"
                        label="Xbox"
                        onChange={(e) => setXbox(e.target.checked)}
                    />
                    <Form.Check
                        type="checkbox"
                        label="Playstation"
                        onChange={(e) => setPlaystation(e.target.checked)}
                    />
                </Form.Group>

                <div className="show-preview-container">
                    <Form.Check
                        type="checkbox"
                        label="Update prev"
                        onChange={(e) => setShowPreview(e.target.checked)}
                    />
                </div>

                <Button variant="outline-primary" type="submit" onSubmit={() => handlePostUpdate(update)}>
                    Submit
                </Button>
            </Form>
            {
                showPreview ? (
                    <div className="preview-container">
                        <UpdateCard update={update} />
                    </div>
                ) : (
                    <></>
                )
            }

        </Body_PostUpdate >
    );
}