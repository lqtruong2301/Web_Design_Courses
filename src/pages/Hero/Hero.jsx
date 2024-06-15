import React from "react";
import { Row, Col, Button } from "antd";
import HeroImg from "../../assets/img/Hero-img.png";
import PlayIcon from "../../assets/icon/play-solid.svg";

import "./Hero.css";

const Hero = () => {
    return (
        <div className="hero">
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <div className="hero-content">
                        <p className="label-hero">😎 EASY LEAENING PLATFORM</p>
                        <h2 className="title">Words learner come here.</h2>
                        <p className="desc-hero">
                            Build skills with courses, certificates, and get
                            online knowledge from our world-class platform.
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
                    <div className="hero-img">
                        <img src={HeroImg} alt="Benisk." />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Hero;
