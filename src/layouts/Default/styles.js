import styled from "styled-components";

export const Layout = styled.div`
    display: grid;
    grid-template-columns: 17.5rem 1fr;
    `
export const Header = styled.header`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem;
    background-color: #ffff;
    border-bottom: 1px solid #f0f1f3;
`
export const Logo = styled.a`
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 4rem;
    padding: 0 1rem 1rem 1rem;

`

export const Main = styled.main`
    min-height: calc(100vh - 9.25rem);
    padding: 1rem;
    overflow: auto;
`
export const  Sidebar = styled.div`
    min-height: calc(100vn - 9.25rem);
    background-color: #3498db;
        a {
            display: block;
            text-decoration: none;
        }
`

export const MenuItem = styled.div`
    padding: 0.5rem;
    color: #000;
    font-weight: 700;

    &:hover {
        background-color: #1118271a;
    }

    .anticon {
        font-size: 1.5rem;
        margin-right: 0.5rem;
    }

    span {
        line-height:  1.75rem;
    }
`
export const Content = styled.div``


export const Footer = styled.footer`
    text-align: center;
    padding: 1rem;
    border-top: 1px solid #f0f1f3;

`