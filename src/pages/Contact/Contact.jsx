import React from "react";
import "./Contact.css";
import { Row, Col } from "antd";
import {
    XOutlined,
    FacebookFilled,
    InstagramFilled,
    LinkedinFilled,
} from "@ant-design/icons";
import Logo from "../../assets/logo/Logo.svg";
import useViewport from "../../hooks/useViewport.jsx";

const Contact = () => {
    const viewPort = useViewport();
    const isMobile = viewPort.width <= 1024;
    return (
        <div className="contact">
            <Row gutter={[16, 16]}>
                {!isMobile ? (
                    <Col span={4}>
                        <a href="#">
                            <img src={Logo} alt="Benisk." />
                        </a>
                    </Col>
                ) : (
                    <></>
                )}
                {!isMobile ? (
                    <Col span={20}>
                        <div className="group-contact">
                            <Row>
                                <Col>
                                    <p className="sub-title-contact">Company</p>
                                    <div className="contact-list">
                                        <span>
                                            <a href="#!">About</a>
                                        </span>
                                        <span>
                                            <a href="#!">Careers</a>
                                        </span>
                                        <span>
                                            <a href="#!">Press</a>
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="sub-title-contact">
                                        Community
                                    </p>
                                    <div className="contact-list">
                                        <span>
                                            <a href="#!">Team Plans</a>
                                        </span>
                                        <span>
                                            <a href="#!">Blog</a>
                                        </span>
                                        <span>
                                            <a href="#!">Students</a>
                                        </span>
                                        <span>
                                            <a href="#!">Scholarships</a>
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="sub-title-contact">
                                        Teaching
                                    </p>
                                    <div className="contact-list">
                                        <span>
                                            <a href="#!">Become a teacher</a>
                                        </span>
                                        <span>
                                            <a href="#!">Teaching academy</a>
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="sub-title-contact">
                                        Be social
                                    </p>

                                    <div className="contact-list">
                                        <span>
                                            <a href="#!">
                                                <XOutlined /> Twitter
                                            </a>
                                        </span>
                                        <span>
                                            <a href="#!">
                                                <FacebookFilled /> Facebook
                                            </a>
                                        </span>
                                        <span>
                                            <a href="#!">
                                                <InstagramFilled /> Instagram
                                            </a>
                                        </span>
                                        <span>
                                            <a href="#!">
                                                {" "}
                                                <LinkedinFilled /> Linkedin
                                            </a>
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                ) : (
                    <Col span={24}>
                        <div className="group-contact">
                            <Row>
                                <Col>
                                    <p className="sub-title-contact">Company</p>
                                    <div className="contact-list">
                                        <span>
                                            <a href="#!">About</a>
                                        </span>
                                        <span>
                                            <a href="#!">Careers</a>
                                        </span>
                                        <span>
                                            <a href="#!">Press</a>
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="sub-title-contact">
                                        Community
                                    </p>
                                    <div className="contact-list">
                                        <span>
                                            <a href="#!">Team Plans</a>
                                        </span>
                                        <span>
                                            <a href="#!">Blog</a>
                                        </span>
                                        <span>
                                            <a href="#!">Students</a>
                                        </span>
                                        <span>
                                            <a href="#!">Scholarships</a>
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="sub-title-contact">
                                        Teaching
                                    </p>
                                    <div className="contact-list">
                                        <span>
                                            <a href="#!">Become a teacher</a>
                                        </span>
                                        <span>
                                            <a href="#!">Teaching academy</a>
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className="contact-list">
                            <span>
                                <a href="#!">
                                    <XOutlined
                                        style={{
                                            width: "30px",
                                            height: "30px",
                                        }}
                                    />{" "}
                                    Twitter
                                </a>
                            </span>
                            <span>
                                <a href="#!">
                                    <FacebookFilled
                                        style={{
                                            width: "30px",
                                            height: "30px",
                                        }}
                                    />{" "}
                                    Facebook
                                </a>
                            </span>
                            <span>
                                <a href="#!">
                                    <InstagramFilled
                                        style={{
                                            width: "30px",
                                            height: "30px",
                                        }}
                                    />{" "}
                                    Instagram
                                </a>
                            </span>
                            <span>
                                <a href="#!">
                                    <LinkedinFilled
                                        style={{
                                            width: "30px",
                                            height: "30px",
                                        }}
                                    />{" "}
                                    Linkedin
                                </a>
                            </span>
                        </div>
                    </Col>
                )}
            </Row>
        </div>
    );
};

export default Contact;
