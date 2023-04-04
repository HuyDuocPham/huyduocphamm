import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PublicRoute =  ({component}) =>  {
    const navigate = useNavigate()


    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            navigate('/login');
        }
    }, []);

    return (
       <div>{component}</div>
    )
}

export default PublicRoute;
//Kiểm tra xem người dùng có đăng nhập chưa, nếu rồi  sẽ chuyển về trang này: navigare('/dashboard')
