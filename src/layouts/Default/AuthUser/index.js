import React from "react";
import { Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import { Name, User, Image, Role } from "./styles";

const AuthUser = () => {

    const navigate = useNavigate();

    const onLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <Dropdown
            menu={{
                items: [
                    {
                        key: "0",
                        label: <a onClick={onLogout}>LogOut</a>,
                    },
                ],
            }}
        >
            <User>
            <Image src ='https://tse3.mm.bing.net/th?id=OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa&pid=Api&P=0' />
            <div>
                <Role>Admin</Role>
                <Name>HDP</Name>
            </div>
            </User>
        </Dropdown>
    )
}

export default AuthUser;