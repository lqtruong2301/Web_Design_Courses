import React from "react";
import "./About.css";
import { Row, Col, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Quotes from "../../assets/icon/quotes.svg";

const users = [
    {
        key: 1,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN9NVBIOk_blWPFbW7lJfwX3FNO6jMIsDdZg&s",
        className: "user-avatar-1",
    },
    {
        key: 2,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3WEprkxrMHXICL4763uuBW_r6RG7pXTUS1Q&s",
        className: "user-avatar-2",
    },
    {
        key: 3,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM8a2MUfdySK0SpBsRoLJ7GvrRP0mMIkixcw&s",
        className: "user-avatar-3",
    },
    {
        key: 4,
        name: "Emma",
        quote: "They are the best people. And this is the suitable platform to learn from distance.",
        position: "student",
        img: "https://www.ldg.com.vn/media/uploads/uploads/21210715-hinh-anh-gai-xinh-16.jpg",
        className: "user-avatar-4",
    },
    {
        key: 5,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxst-buwwCr6d5wH4B43Dnmh-_2kG7UsDg_g&s",
        className: "user-avatar-5",
    },
    {
        key: 6,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8sfyyNWzjeMxzNRcDX1_tluhfVY2G9B7ulw&s",
        className: "user-avatar-6",
    },
];

const About = () => {
    const userWithQuote = users.find((user) => user.quote);
    return (
        <div className="about">
            <Row>
                <Col span={10}>
                    <div className="about-box">
                        <img
                            src={Quotes}
                            alt="Benisk."
                            style={{ width: "36px", height: "29px" }}
                        />
                        {userWithQuote && (
                            <>
                                <p className="quote">{userWithQuote.quote}</p>
                                <p className="position-about">
                                    - {userWithQuote.name},&nbsp;
                                    <span className="position-about-user">
                                        {userWithQuote.position}.
                                    </span>
                                </p>
                            </>
                        )}

                        <div className="group-arrow-btn">
                            <Button
                                icon={
                                    <LeftOutlined
                                        style={{ color: "#fff" }}
                                        className="arrow-left-btn"
                                    />
                                }
                            ></Button>
                            <Button
                                icon={
                                    <RightOutlined
                                        style={{ color: "#fff" }}
                                        className="arrow-right-btn"
                                    />
                                }
                            ></Button>
                        </div>
                    </div>
                </Col>
                <Col span={14}>
                    <Row>
                        <div className="user-avatars-group">
                            {users.map((item) => (
                                <img
                                    src={item.img}
                                    alt="Besnik."
                                    className={`user-avatar ${item.className}`}
                                />
                            ))}
                        </div>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default About;
