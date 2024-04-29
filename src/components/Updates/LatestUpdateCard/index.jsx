import { Container, Image } from "react-bootstrap";

import { Body_LatestUpdateCard } from "./index.style";
import { useTranslation } from "react-i18next";

export function LatestUpdateCard({ latestUpdate, updates }) {
    const { t } = useTranslation();

    const handleOpenTwitter = (url) => {
        if (url) {
            window.open(url, "_blank");
        }
    }

    return (
        <Body_LatestUpdateCard>
            <Container fluid className="latest-updates-container">
                <div className="latest-updates-tag">{t('news.featured_news')}</div>
                <div className="latest-updates-banner-container" onClick={() => handleOpenTwitter(latestUpdate.url)}>
                    <Image
                        className="latest-update-banner"
                        src={latestUpdate.banner}
                        alt={latestUpdate.banner}
                        loading="lazy"
                        draggable={false}
                    />
                    <div className="latest-updates-details">
                        <div className="details">
                            <h1 className="latest-title">{latestUpdate.title}</h1>
                            <strong className="latest-description">{latestUpdate.description}</strong>
                        </div>
                    </div>
                </div>
                <div className="others-details">
                    {updates && updates.slice(0, 3).map(item => (
                        <div key={item.id} className="other-detail" onClick={() => handleOpenTwitter(item.url)}>
                            <h1 className="others-details-title">{item.title}</h1>
                            <strong>{item.description}</strong>
                            <p>{item.date}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </Body_LatestUpdateCard>
    )
} 