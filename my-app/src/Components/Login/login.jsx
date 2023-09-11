import React from "react";
import './login.scss';
import { Button, Checkbox, Form, Input, message } from 'antd';
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const [loginForm] = Form.useForm();
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log("values", values)
        const loginUrl = "https://snapkaro.com/eazyrooms_staging/api/userlogin";
        const payload = {
            user_email: values.user_email,
            user_password: values.user_password,
        }
        axios.post(loginUrl, payload).then((res) => {
            console.log("res", res)
            if (res?.data?.status) {
                localStorage.setItem('user', JSON.stringify(res?.data?.user_data[0]));
                navigate("/dashboard")
                message.success("Login successful")
            } else {
                message.error("login failed")
            }
        }).catch((err) => {
            console.log("err", err)
        })
    }
    const onFinishFailed = (error) => {
        console.log("error", error)
    }
    return (
        <>
            <div className="Container">
                <div className="container-left">
                    <div className="leftside">
                        <h1>Welcome to our community</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, enim.</p>
                    </div>
                </div>
                <div className="container-right">
                    <div className="rightside">
                        <Form
                            name="loginForm"
                            form={loginForm}
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            style={{
                                maxWidth: 600,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Email"
                                name="user_email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email!',
                                    },
                                ]}
                            >
                                <Input type="email" placeholder="Enter your email" />
                            </Form.Item>
                            <Form.Item
                                label="password"
                                name="user_password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input type="password" placeholder="Enter your password" />
                            </Form.Item>
                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                        <div style={{ marginTop: 16, textAlign: 'center' }}>
                            Don't have an account? <Link to="/signup">Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;