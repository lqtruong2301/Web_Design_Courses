import React from "react";
import { Row, Col, Button } from "antd";
import HeroImg from "../../assets/img/Hero-img.png";
import PlayIcon from "../../assets/icon/play-solid.svg";
import BookIcon from "../../assets/icon/book.svg";
import { useSpring, animated } from "@react-spring/web";
import "./Hero.css";

const Hero = () => {
    const animationProps = useSpring({
        from: { opacity: 0, transform: "translateY(50px)" },
        to: { opacity: 1, transform: "translateY(0px)" },
        config: { duration: 1000 },
    });
    return (
        <animated.div className="hero" style={animationProps}>
            <Row>
                <Col span={12}>
                    <div className="hero-content">
                        <p className="label-hero">😎 EASY LEAENING PLATFORM</p>
                        <h2 className="title">Words learner come here.</h2>
                        <p className="desc-hero">
                            Build skills with courses, certificates, and get
                            online knowledge from our <br />
                            world-class platform.
                        </p>
                        <div className="play-btn-box">
                            <Button className="start-btn">
                                <span style={{ fontSize: "1." }}>
                                    Get Started
                                </span>
                            </Button>
                            <Button className="play-btn">
                                <img
                                    src={PlayIcon}
                                    alt="Play"
                                    className="play-icon"
                                />
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col span={12}>
                    <div className="hero-img-box">
                        <img src={HeroImg} alt="Benisk." className="hero-img" />
                        <div className="course-state">
                            <img
                                src={BookIcon}
                                alt="Courses"
                                className="book-icon"
                            />
                            <span
                                style={{
                                    position: "absolute",
                                    left: "29px",
                                    marginTop: "10px",
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="4"
                                    viewBox="0 0 28 4"
                                    fill="none"
                                >
                                    <path
                                        d="M2 4H26C27.1046 4 28 3.10457 28 2C28 0.895431 27.1046 0 26 0H2C0.895431 0 0 0.895431 0 2C0 3.10457 0.895431 4 2 4Z"
                                        fill="white"
                                    />
                                </svg>
                            </span>
                            <span className="course-state-content">
                                Courses 1000+
                            </span>
                        </div>
                        <div className="schedules-state"></div>
                        <div className="students-active-state"></div>
                    </div>
                </Col>
            </Row>
        </animated.div>
    );
};

export default Hero;
