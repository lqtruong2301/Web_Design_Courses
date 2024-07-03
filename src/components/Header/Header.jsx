import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo/Logo.svg";
import { Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import useViewport from "../../hooks/useViewport.jsx";

const MyHeader = ({ current, setCurrent, scrollToTop }) => {
    const viewPort = useViewport();
    const isMobile = viewPort.width <= 1024;
    const [drawerVisible, setDrawerVisible] = useState(false);

    const showDrawer = () => {
        setDrawerVisible(true);
    };

    const closeDrawer = () => {
        setDrawerVisible(false);
    };

    return (
        <div className="header">
            <div
                className="logo"
                onClick={scrollToTop}
                style={{ cursor: "pointer" }}
            >
                <img src={Logo} alt="Benisk." />
            </div>
            {isMobile ? (
                <>
                    <Button
                        style={{
                            border: "none",
                            width: "50px",
                            height: "50px",
                        }}
                        icon={<MenuOutlined />}
                        onClick={showDrawer}
                        className="hamburger-btn"
                    />
                    <Drawer
                        style={{ textAlign: "center" }}
                        title="Menu"
                        placement="right"
                        onClose={closeDrawer}
                        visible={drawerVisible}
                    >
                        <Menu
                            style={{ textAlign: "center" }}
                            mode="vertical"
                            selectedKeys={[current]}
                            onClick={closeDrawer}
                        >
                            <Menu.Item
                                key="home"
                                onClick={() => setCurrent("home")}
                            >
                                Home
                            </Menu.Item>
                            <Menu.Item
                                key="features"
                                onClick={() => setCurrent("features")}
                            >
                                Features
                            </Menu.Item>
                            <Menu.Item
                                key="pricing"
                                onClick={() => setCurrent("pricing")}
                            >
                                Pricing
                            </Menu.Item>
                            <Menu.Item
                                key="about"
                                onClick={() => setCurrent("about")}
                            >
                                About
                            </Menu.Item>
                            <Menu.Item
                                key="contact"
                                onClick={() => setCurrent("contact")}
                            >
                                Contact
                            </Menu.Item>
                        </Menu>
                        <div className="user-btn">
                            <Button className="btn sign-in-btn-mb">
                                Sign In
                            </Button>
                            <Button className="btn sign-up-btn-mb ">
                                Sign Up
                            </Button>
                        </div>
                    </Drawer>
                </>
            ) : (
                <>
                    <Menu
                        mode="horizontal"
                        selectedKeys={[current]}
                        className="nav-menu"
                    >
                        <Menu.Item
                            key="home"
                            onClick={() => setCurrent("home")}
                        >
                            Home
                        </Menu.Item>
                        <Menu.Item
                            key="features"
                            onClick={() => setCurrent("features")}
                        >
                            Features
                        </Menu.Item>
                        <Menu.Item
                            key="pricing"
                            onClick={() => setCurrent("pricing")}
                        >
                            Pricing
                        </Menu.Item>
                        <Menu.Item
                            key="about"
                            onClick={() => setCurrent("about")}
                        >
                            About
                        </Menu.Item>
                        <Menu.Item
                            key="contact"
                            onClick={() => setCurrent("contact")}
                        >
                            Contact
                        </Menu.Item>
                    </Menu>
                    <div className="user-btn">
                        <Button className="btn sign-in-btn">Sign In</Button>
                        <Button className="btn sign-up-btn">Sign Up</Button>
                    </div>
                </>
            )}
        </div>
    );
};

export default MyHeader;
