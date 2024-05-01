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
        width: 328px;
        height: 100%;

    }
    .buttons-container{
        display: flex;
        width: 100%;

        border-bottom: 2px solid #9EC8B9;
    }

    .btn-filter{
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        background-color: transparent;
        border: 2px solid #9EC8B9;
        border-bottom: none;
    }
    .btn-filter:hover{
        background-color: #9EC8B9;
        border: 2px solid #9EC8B9;
        border-bottom: none;
    }
    .selected-button{
        background-color: #9EC8B9;
    }


    .rc-virtual-list-holder-inner{
        display: flex;
        gap: 0.6rem;
    }

`;