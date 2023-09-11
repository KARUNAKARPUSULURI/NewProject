import { Button, Form, Input, message } from "antd";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [registrationForm] = Form.useForm();
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log("values", values)
        const registrationUrl = "https://snapkaro.com/eazyrooms_staging/api/user_registeration";
        const payload = {
            user_firstname: values.user_firstname,
            user_email: values.user_email,
            user_phone: values. user_phone,
            user_password: values.user_password,
            user_lastname: values.user_lastname,
            user_city: values.user_city,
            user_zipcode: values.user_zipcode
        }
        axios.post(registrationUrl, payload).then((res) => {
            console.log("res", res)
            if(res.data.status){
                navigate("/login")
                message.success("Registration successful")
            }else{
                message.error("Registration failed")
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
            <Form
                name="RegistrationForm"
                form={registrationForm}
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
                    label="First Name"
                    name="user_firstname"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your first name!',
                        },
                    ]}
                >
                    <Input type="text" placeholder="Enter your first name" />
                </Form.Item>
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
                    label="Phone"
                    name="user_phone"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone!',
                        },
                    ]}
                >
                    <Input type="number" placeholder="Enter your phone" />
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
                    label="Last Name"
                    name="user_lastname"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your last name!',
                        },
                    ]}
                >
                    <Input type="text" placeholder="Enter your last name" />
                </Form.Item>
                <Form.Item
                    label="City"
                    name="user_city"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your city!',
                        },
                    ]}
                >
                    <Input type="text" placeholder="Enter your city" />
                </Form.Item>
                <Form.Item
                    label="Pin code"
                    name="user_zipcode"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your zip code!',
                        },
                    ]}
                >
                    <Input type="text" placeholder="Enter your zip code" />
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
        </>
    )
};

export default SignUp;