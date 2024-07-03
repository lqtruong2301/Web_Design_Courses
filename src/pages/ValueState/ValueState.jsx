import React from "react";
import "./ValueState.css";
import { Row, Col } from "antd";

const ValueState = () => {
    return (
        <div className="value-state">
            <Row className="row-value-state"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0 154px",
                }}
            >
                <Col>
                    <p className="value-state-title">100+</p>
                    <p className="value-state-desc">Popular Courses</p>
                </Col>

                <Col>
                    <p className="value-state-title">500+</p>
                    <p className="value-state-desc">Skilled Trainer</p>
                </Col>

                <Col>
                    <p className="value-state-title">1M+</p>
                    <p className="value-state-desc">Student Learning</p>
                </Col>
            </Row>
        </div>
    );
};

export default ValueState;
