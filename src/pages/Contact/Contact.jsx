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

const Contact = () => {
    return (
        <div className="contact">
            <Row gutter={[16, 16]}>
                <Col span={4}>
                    <a href="#">
                        <img src={Logo} alt="Benisk." />
                    </a>
                </Col>
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
                                        <a href="#!">About</a>
                                    </span>
                                    <span>
                                        <a href="#!">About</a>
                                    </span>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="sub-title-contact">Community</p>
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
                                <p className="sub-title-contact">Teaching</p>
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
                                <p className="sub-title-contact">Be social</p>

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
            </Row>
        </div>
    );
};

export default Contact;
