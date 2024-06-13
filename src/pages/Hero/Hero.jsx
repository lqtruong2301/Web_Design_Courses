import React from "react";
import { Row, Col } from "antd";

import "./Hero.css";

const Hero = () => {
    return (
        <div className="hero">
            <Row gutter={[16, 16]}>
                <Col span={12}></Col>
                <Col span={12}></Col>
            </Row>
        </div>
    );
};

export default Hero;
