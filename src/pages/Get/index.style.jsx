import styled from "styled-components";

export const Body_Get = styled.div`

    color: rgba(255, 255, 255, 0.8);
   
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
    
    .logo{
        max-width: 100%;
        width: 428px;
        height: 100%;

    }
    .rc-virtual-list-holder-inner{
        display: flex;
        gap: 0.6rem;
    }

    .update-containter{
        display: flex;
        border-radius: 1rem;
        border: 2px solid transparent;

        overflow: hidden;
        transition: border 0.5s;
    }
    .update-containter:hover{
        border: 2px solid #9EC8B9;
    }
    .update-banner-containter{
    }
    .update-banner{
        max-width: 100%;
        width: 268px;
        max-height: 100%;
        height: 136px;
        object-fit: cover;
    }
    .update-details{
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