import React from "react";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

const FormLogIn = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onSubmit = async () => {
    const values = await form.validateFields();
    if (values.email === "admin@gmail.com" && values.password === "1") {
      localStorage.setItem("token", `${values.email}${values.password}`);
      navigate("/huyduocphamm-users");
    } else message.error("Thong tin dang nhap khong dung!");
  };

  return (
    <Container>
      <Form form={form} layout="vertical">
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true }, { type: "email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true }]}
        >
          <Input.Password />
        </Form.Item>
        <Button type="primary" onClick={onSubmit}>
          Log In
        </Button>
      </Form>
    </Container>
  );
};
export default FormLogIn;
