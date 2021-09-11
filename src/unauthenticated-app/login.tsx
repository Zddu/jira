import React, { FormEvent } from "react";
import { useAuth } from "../context/auth-context";
import { Button, Form, Input, message } from "antd";

export const LoginScreen = () => {
  const { login } = useAuth();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value;
    login({ username, password });
  };
  return(
    <Form onFinish={handleSubmit}>
      <Form.Item name={"username"} rules={[{ required: true, message: "请输入用户名" }]}>
        <label htmlFor="username">用户名：</label>
        <Input placeholder="用户名" type="text" id={"username"} />
      </Form.Item>
      <Form.Item>
        <label htmlFor="password">密码：</label>
        <Input placeholder="密码" type="password" id={"password"} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">登录</Button>
      </Form.Item>
    </Form>)
}
