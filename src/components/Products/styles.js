import styled from "styled-components"
import { Button, Input } from "antd"


export const ButtonCreate = styled(Button)`  
    display: block;
    &:hover {
        background-color: blue;
        color: red;

    }
    &:active, &:focus {
        background-color: red;
    }
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
`

export const InputSearch = styled(Input.Search)`
    width: 30%;
    opacity: .8;
`


