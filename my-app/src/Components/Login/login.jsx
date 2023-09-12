import React, { useState } from "react";
import './login.scss';
import { Button, Checkbox, Form, Input, message } from 'antd';
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const [errmsg, setErrMsg] = useState();
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
                setErrMsg(true)
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
            <div className="loginblock-wrapper">
                <div className="loginmainblock" >
                    <div className="lgleft">
                        <h1>
                            Join our <br />
                            Community
                        </h1>
                        <p>Be inspired by Created by designers around the globe</p>
                        <p>Don't have an account?<Link to='/signup' className="signup-btn">SignUp</Link></p>
                    </div>
                    <div className="lgright">
                        <h1>Login Here!</h1>
                        <Form
                            onFinish={onFinish}
                            form={loginForm}
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 24,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Username"
                                name="user_email"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your username!",
                                    },
                                ]}
                            >
                                <Input placeholder="Enter your email"/>
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
                            <span className="error-msg">
                                <center>
                                    <span style={{ color: "red" }}>
                                        {errmsg ? "*Invalid credentials" : ""}
                                    </span>
                                </center>
                            </span>
                            <Form.Item
                                wrapperCol={{
                                    span: 24,
                                }}
                            >
                                <Button
                                    type="primary"
                                    className="bntsubmit"
                                    htmlType="submit"
                                    style={{marginTop:50}}
                                >
                                    Login
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
