import { Container, Image } from "react-bootstrap";

import { SiEpicgames } from "react-icons/si";
import { FaXbox, FaPlaystation, FaSteam } from "react-icons/fa";
import { Body_UpdateCard } from "./index.style";

export function UpdateCard({ update }) {

    return (
        <Body_UpdateCard>
            <Container fluid className="updates-container">
                <div className="update-banner-container">
                    <Image
                        className="update-banner"
                        src={update.banner ? update.banner : ""}
                        alt={update.banner ? update.banner : ""}
                        loading="lazy"
                        draggable={false}
                    />
                </div>
                <div className="updates-details">
                    <div className="platafroms-container">
                        {update.xbox
                            ? (<div className="icon-container"><FaXbox className="icon" size={"16px"} /> Xbox</div>)
                            : (<></>)}
                        {update.playstation
                            ? (<div className="icon-container"><FaPlaystation className="icon" size={"16px"} /> Playstation</div>)
                            : (<></>)}
                        {update.steam
                            ? (<div className="icon-container"><FaSteam className="icon" size={"16px"} /> Steam</div>)
                            : (<></>)}
                        {update.epicgames
                            ? (<div className="icon-container"><SiEpicgames className="icon" size={"16px"} /> Epic Games</div>)
                            : (<></>)}

                    </div>
                    <div className="details">
                        <h1 className="update-title">{update.title ? update.title : "Update Title"}</h1>
                        <p className="update-description">{update.description ? update.description : "Update Description"}</p>
                        <p className="update-date">{update.date ? update.date : "Mon, 15 Apr 2024 20:49:55 GMT"}</p>
                    </div>
                </div>
            </Container>
        </Body_UpdateCard>
    )
} 