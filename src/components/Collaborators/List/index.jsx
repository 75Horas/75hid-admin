import List from "rc-virtual-list";
import { Body_CollaboratorsList } from "./index.style";
import { Button, Image } from "react-bootstrap";
import { FaInbox, FaTrash } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";

export function CollaboratorsList({ collaborators }) {
    const participating = true;
    return (
        <Body_CollaboratorsList>
            {collaborators !== null ? (
                <List
                    data={collaborators}
                    height={"50vh"}
                    itemHeight={30}
                    itemKey="id"
                >
                    {index =>
                        <div key={index.id} className="collaborator-containter">
                            <div className="collaborator-banner-container">
                                <Image
                                    className="collaborator-banner"
                                    src={index.banner}
                                    alt={`collaborator Banner for ${index.id}`}
                                    loading="lazy"
                                    draggable={false}
                                />
                            </div>
                            <div className="contents-container">
                                <div className="collaborator-details">
                                    <h2>{index.title}</h2>
                                    <p>{participating ? "TRUE" : "FALSE"}</p>
                                </div>
                                <div className="icon-container">
                                    <TbWorldWww size={20} className="icon" onClick={() => { window.open(index.url, "_blank") }} />
                                    <FaTrash className="icon trash" onClick={() => { handleShow(index.id) }} />
                                </div>
                            </div>
                        </div>
                    }
                </List>
            ) : (
                <div className="empty-list">
                    <FaInbox size={"96px"} />
                    <p>No collaborator available, click the button below to add a new collaborator</p>
                </div>
            )}
            <div className="button-container">
                <Button variant="outline-primary"
                    onClick={() => navigate("/post")}
                >
                    Post new collaborator
                </Button>
            </div>
        </Body_CollaboratorsList>
    )
}