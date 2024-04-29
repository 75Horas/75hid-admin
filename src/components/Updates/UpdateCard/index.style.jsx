import styled from "styled-components";
import { devices } from "../../../js/Breakpoints";

export const Body_UpdateCard = styled.div`

width: 100%;
color: rgba(255, 255, 255, 0.8);

.updates-container{
    border-top: 2px solid #9EC8B9;
    padding: 0;
    display: flex;
    width: 100%;
}

.update-banner-container{
    width: 30%;
}
.update-banner{
    max-width: 100%;
    width: 100%;
    height: 100%;
    
    object-fit: cover;
}

.updates-details{
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    width: 100%;

    background-color: #092635;
}
.details{
    line-height: 1.4rem;
    padding: 0 1rem;
}

.platafroms-container{
    display: flex;
    gap: 1rem;
    flex-direction: row;
    align-items: center;
    padding: 0 1rem;
}

.icon-container{
    display: flex;
    align-items: center;
    gap: 0.4rem;
}

.update-title{
    font-size: 1.6rem;
}
.update-title, .update-description, .update-date{
    text-align: start;
}

.update-date{
    line-height: 1px;
}

@media ${devices.md}{
    .update-title{
        font-size: 1.4rem;
        margin: 0;
    }
}
@media ${devices.sm}{
    .update-title{
        font-size: 1.2rem;
    }
    .update-banner{
        max-height: 92px;
    }
}

`;