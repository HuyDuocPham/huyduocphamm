import React from "react";
import { BorderLeftOutlined, UserOutlined, HeartOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom";
import { Footer, Header, Main, Sidebar, Content, Logo, Layout, MenuItem } from "./styles";
import AuthUser from "./AuthUser";


const DefaultLayout = ({ children }) => {

    return (
        <div>
            <Layout>
                <Sidebar>
                    <Logo>Green Academy</Logo>
                    <Link to='/huyduocphamm-users'>
                        <MenuItem>
                            <UserOutlined />Users
                        </MenuItem>
                    </Link>
                    <Link to='/huyduocphamm-products'>
                        <MenuItem>
                            <BorderLeftOutlined />Products
                        </MenuItem>
                    </Link>
                </Sidebar>
                <Content>
                    <Header>
                        <AuthUser />
                    </Header>
                    <Main>
                        {children}
                    </Main>
                    <Footer>
                        <p>Made with <HeartOutlined /> by Huy Duoc Pham </p>
                        <p>Email: huyduocphamm@gmail.com</p>
                    </Footer>
                </Content>
            </Layout>
        </div>
    )
}

export default DefaultLayout;