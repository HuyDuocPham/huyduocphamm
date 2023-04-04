import styled from "styled-components";

export const User = styled.div`
    display: grid;
    grid-template-columns: 2rem 1fr;
    grid-gap: .5rem;

    img {
        width: 100%;
        height: auto;
        border: 1px solid #eeeeee;
        border-radius: 50%;
    }
`

export const Image = styled.div`
    background-image : url(${props => props.src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    padding-top: 100%;
`

export const Role = styled.div`
    font-size: 1rem;
    margin-bottom: .25rem;
`

export const Name = styled.h6`
    font-size: 1rem;
    margin: 0;
`