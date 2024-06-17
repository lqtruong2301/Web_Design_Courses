import React from "react";
import "./Header.css";
import Logo from "../../assets/logo/Logo.svg";
import { Menu, Button } from "antd";

const MyHeader = ({ current, setCurrent, scrollToTop }) => {
    return (
        <div className="header">
            <div
                className="logo"
                onClick={scrollToTop}
                style={{ cursor: "pointer" }}
            >
                <img src={Logo} alt="Benisk." />
            </div>
            <Menu
                mode="horizontal"
                selectedKeys={[current]}
                className="nav-menu"
            >
                <Menu.Item key="home" onClick={() => setCurrent("home")}>
                    Home
                </Menu.Item>
                <Menu.Item
                    key="features"
                    onClick={() => setCurrent("features")}
                >
                    Features
                </Menu.Item>
                <Menu.Item key="pricing" onClick={() => setCurrent("pricing")}>
                    Pricing
                </Menu.Item>
                <Menu.Item key="about" onClick={() => setCurrent("about")}>
                    About
                </Menu.Item>
                <Menu.Item key="contact" onClick={() => setCurrent("contact")}>
                    Contact
                </Menu.Item>
            </Menu>
            <div className="user-btn">
                <Button className="btn sign-in-btn">Sign In</Button>
                <Button className="btn sign-up-btn">Sign Up</Button>
            </div>
        </div>
    );
};

export default MyHeader;
