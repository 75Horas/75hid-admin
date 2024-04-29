import styled from "styled-components";

export const Body_PostUpdate = styled.div`
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .btn-close{
        position: absolute;
        right: 0;
        top: 0;

        margin: 2rem;
    }
    .logo{
        max-width: 100%;
        width: 428px;
        height: 100%;

        margin-bottom: 1rem;
    }
    form{
        color: rgba(0, 0, 0, 0.5);
    }

    .form-label, .form-check-label{
        color: rgba(255, 255, 255, 0.8);
    }

    .checkbox-container{
        display: flex;
        justify-content: center;
        gap: 1rem;
    }

    .show-preview-container{
        padding-bottom: 1rem;
        gap: 1rem;
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .preview-container{
        width: 60%;
    }
`;