import React from "react";
import { Button, message } from "antd";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate("/login");
        message.success("logged out successfully")
    };

    return (
        <div>
            <h1>Welcome to the Dashboard</h1>
            <Button onClick={handleLogout}>Logout</Button>
            {user && (
                <div>
                    <h2>User Information:</h2>
                    <p>{user.user_city}</p>
                    <p>{user.user_email}</p>
                    <p>{user.user_firstname}</p>
                    <p>{user.user_lastname}</p>
                    <p>{user.user_password}</p>
                    <p>{user.user_phone}</p>
                    <p>{user.user_zipcode}</p>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
