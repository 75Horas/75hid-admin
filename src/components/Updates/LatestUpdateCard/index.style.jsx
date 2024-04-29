import styled from "styled-components";
import { devices } from "../../../js/Breakpoints";

export const Body_LatestUpdateCard = styled.div`

width: 100%;

.latest-updates-tag{
    z-index: 1;
    position: absolute;

    margin: 1rem 0 2rem -1rem;
    padding: 0.2rem 1rem;

    font-size: 1.2rem;
    border-radius: 2px;
    letter-spacing: 2px;

    background-color: #1B4242;
}
.latest-updates-container{
    display: flex;
    padding: 0;
    
    width: 100%;

    background-color: #092635;
}

.latest-updates-banner-container{
    position: relative;
    /* width: 50%; */
}

.latest-update-banner{
    max-width: 100%;
    width: 100%;
    height: 100%;
    
    object-fit: cover;
}

.latest-updates-details{
    position: absolute;
    bottom: 0;

    display: flex;
    flex-direction: column;
    align-items: start;
    
    width: 100%;
}

.latest-title{
    padding: 0.6rem 2rem;
    border-bottom: 4px solid #9EC8B9;
    background-color: #000000b0;
}
.latest-description{
    padding: 0.6rem 2rem;
    background-color: #000000b0;
}
.details{
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    padding-bottom: 1rem;
    line-height: 1.4rem;
}
.others-details{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
}
.other-detail{
    margin-bottom: 0.4rem;
    border-bottom: 2px solid #9EC8B9;
}
.others-details-title{
    font-size: 1.6rem;
}
@media ${devices.md}{
    display: none;
}

`;