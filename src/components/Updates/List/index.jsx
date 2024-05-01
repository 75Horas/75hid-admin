import List from "rc-virtual-list";
import { Body_UpdatesList } from "./index.style";
import { BsTwitterX } from "react-icons/bs";
import { FaInbox, FaTrash } from "react-icons/fa6";
import { Button, Image } from "react-bootstrap";

export function UpdatesList({ updates }) {
    return (
        <Body_UpdatesList>
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
        </Body_UpdatesList>
    )
}