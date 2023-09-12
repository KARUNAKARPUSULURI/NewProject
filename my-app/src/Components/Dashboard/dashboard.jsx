import React from "react";
import { Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import "./dashboard.scss";

const Dashboard = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate("/");
        message.success("Logged out successfully")
    };

    return (
        <div className="dashboard_container">
            <div className="dashboard_header">
                <h1>Welcome to the Dashboard</h1>
                <Button className="logout-button" onClick={handleLogout}>Logout</Button>
            </div>
            <div className="user-info-container">
                <div className="image-container">
                    <img className="image" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="User"/>
                </div>
                {user && (
                    <div className="user-info-card">
                        <h2 className="user-info-header">User Information:</h2>
                        <p className="user-info-item">Name: {user.user_firstname} {user.user_lastname}</p>
                        <p className="user-info-item">Email: {user.user_email}</p>
                        <p className="user-info-item">Phone: {user.user_phone}</p>
                        <p className="user-info-item">City: {user.user_city}</p>
                        <p className="user-info-item">Zip Code: {user.user_zipcode}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
