import React from "react";
import "./Course.css";
import { Row, Col, Card, Button, Typography } from "antd";
import icon from "../../assets/icon/course_icon.svg";
import web_design from "../../assets/img/web_design.png";
import web_development from "../../assets/img/web_development.png";
import uxui_design from "../../assets/img/ux_ui_design.png";
import useViewport from "../../hooks/useViewport.jsx";
const { Meta } = Card;

const items = [
    {
        key: "1",
        icon: web_design,
        title: "Web Design",
        desc: "Web design basic to higher level",
        fee: "200$",
        class: "40",
        month: "3",
    },
    {
        key: "2",
        icon: web_development,
        title: "Web Development",
        desc: "Web development basic to higher level",
        fee: "250$",
        class: "30",
        month: "3",
    },
    {
        key: "3",
        icon: uxui_design,
        title: "UX/UI Design",
        desc: "UI/UX design basic to higher level",
        fee: "350$",
        class: "50",
        month: "4",
    },
];

const MyComponent = () => {
    const viewPort = useViewport();
    const isMobile = viewPort.width <= 1024;
    return (
        <div className="course">
            <div className="course-top">
                <p className="label-course">COURSES</p>
                <h2 className="sub-title">Popular Courses</h2>

                <Row
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Col>
                        <p className="desc-course">
                            Check out our most popular courses that suit for
                            you. Here you can find your favourite one.
                        </p>
                    </Col>

                    <Col>
                        <Typography.Link
                            href="#!"
                            className="view-all-course-btn"
                        >
                            View All Course
                        </Typography.Link>
                    </Col>
                </Row>

                {!isMobile ? (
                    <Row gutter={[16, 16]} style={{ marginTop: "80px" }}>
                        {items.map((item) => (
                            <Col span={8} key={item.key}>
                                <Card
                                    className="course_card"
                                    hoverable
                                    cover={
                                        <img alt={item.title} src={item.icon} />
                                    }
                                >
                                    <Meta
                                        title={item.title}
                                        description={
                                            <div>
                                                <Row>
                                                    <Col>
                                                        <Row>
                                                            <div className="card_content">
                                                                Fee: {item.fee}{" "}
                                                            </div>
                                                            <div className="card_content">
                                                                {item.desc}
                                                            </div>
                                                            <div
                                                                style={{
                                                                    display:
                                                                        "flex",
                                                                    alignItems:
                                                                        "center",
                                                                }}
                                                            >
                                                                <img
                                                                    src={icon}
                                                                    style={{
                                                                        marginRight: 4,
                                                                    }}
                                                                />{" "}
                                                                {item.class}{" "}
                                                                Classes
                                                                <img
                                                                    src={icon}
                                                                    style={{
                                                                        margin: "0 4px",
                                                                    }}
                                                                />{" "}
                                                                {item.month}{" "}
                                                                Months
                                                            </div>
                                                        </Row>
                                                        <Row
                                                            style={{
                                                                marginTop:
                                                                    "20px",
                                                            }}
                                                        >
                                                            {" "}
                                                            <Button
                                                                type="primary"
                                                                style={{
                                                                    minHeight:
                                                                        "50px",
                                                                    borderRadius:
                                                                        "12px",
                                                                    fontSize:
                                                                        "1.8rem",
                                                                    fontWeight:
                                                                        "500",
                                                                }}
                                                            >
                                                                View Course
                                                            </Button>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </div>
                                        }
                                    />
                                </Card>
                            </Col>
                        ))}

                        {/* Bỏ dấu comment và thêm các mục khóa học khác nếu cần */}
                        {/*  */}
                    </Row>
                ) : (
                    <Row gutter={[16, 16]} style={{ marginTop: "80px", display:"flex", flexDirection: "column", alignItems:"center" }}>
                        {items.map((item) => (
                            <Col span={16} key={item.key}>
                                <Card
                                    className="course_card"
                                    hoverable
                                    cover={
                                        <img alt={item.title} src={item.icon} />
                                    }
                                >
                                    <Meta
                                        title={item.title}
                                        description={
                                            <div>
                                                <Row>
                                                    <Col>
                                                        <Row>
                                                            <div className="card_content">
                                                                Fee: {item.fee}{" "}
                                                            </div>
                                                            <div className="card_content">
                                                                {item.desc}
                                                            </div>
                                                            <div
                                                                style={{
                                                                    display:
                                                                        "flex",
                                                                    alignItems:
                                                                        "center",
                                                                }}
                                                            >
                                                                <img
                                                                    src={icon}
                                                                    style={{
                                                                        marginRight: 4,
                                                                    }}
                                                                />{" "}
                                                                {item.class}{" "}
                                                                Classes
                                                                <img
                                                                    src={icon}
                                                                    style={{
                                                                        margin: "0 4px",
                                                                    }}
                                                                />{" "}
                                                                {item.month}{" "}
                                                                Months
                                                            </div>
                                                        </Row>
                                                        <Row
                                                            style={{
                                                                marginTop:
                                                                    "20px",
                                                            }}
                                                        >
                                                            {" "}
                                                            <Button
                                                                type="primary"
                                                                style={{
                                                                    minHeight:
                                                                        "50px",
                                                                    borderRadius:
                                                                        "12px",
                                                                    fontSize:
                                                                        "1.8rem",
                                                                    fontWeight:
                                                                        "500",
                                                                }}
                                                            >
                                                                View Course
                                                            </Button>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </div>
                                        }
                                    />
                                </Card>
                            </Col>
                        ))}

                        {/* Bỏ dấu comment và thêm các mục khóa học khác nếu cần */}
                        {/*  */}
                    </Row>
                )}
            </div>
        </div>
    );
};

export default MyComponent;
