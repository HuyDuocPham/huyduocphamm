import styled from "styled-components";

export const Actions = styled.div `
    button {
        margin: 16px;
        background-color: gray;
    }
`
export const Image =styled.div`
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
  padding-top: 100%;
`