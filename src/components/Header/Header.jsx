import React from "react";
import "./Header.css";
import Logo from "../../assets/logo/Logo.svg";
import { Menu, Button } from "antd";

const MyHeader = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={Logo} alt="Benisk." />
            </div>
            <Menu
                mode="horizontal"
                defaultSelectedKeys={["home"]}
                className="nav-menu"
            >
                <Menu.Item key="home">Home</Menu.Item>
                <Menu.Item key="features">Features</Menu.Item>
                <Menu.Item key="pricing">Pricing</Menu.Item>
                <Menu.Item key="about">About</Menu.Item>
                <Menu.Item key="contact">Contact</Menu.Item>
            </Menu>
            <div className="user-btn">
                <Button className="btn sign-in-btn">Sign In</Button>
                <Button className="btn sign-up-btn">Sign Up</Button>
            </div>
        </div>
    );
};

export default MyHeader;
