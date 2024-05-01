import styled from "styled-components";

export const Body_CollaboratorsList = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;

.collaborator-containter{
    display: flex;
    border-radius: 1rem;
    border: 2px solid transparent;

    overflow: hidden;
    transition: border 0.5s;
}
.collaborator-containter:hover{
    border: 2px solid #9EC8B9;
}


.collaborator-banner{
        max-width: 100%;
        width: 268px;
        max-height: 100%;
        height: 136px;
        object-fit: cover;
    }
    .collaborator-details{
        text-align: start;
    }
    .contents-container{
        display: flex;
        width: 100%;
        padding: 0 1rem;
        justify-content: space-between;
    }
    .icon-container{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
    .icon{
        transition: color 0.5s ;
    }
    .icon:hover{
        color: #0091d0;
    }
    .trash:hover{
        color: #e70000;
    }

    .empty-list{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        height: 50vh;
        opacity: 0.5;
    }
`;