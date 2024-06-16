import React from "react";
import "./Slider.css";
import { Carousel, Button, Row, Col } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const banners = [
    {
        key: 1,
        className: "banner-1",
        title: "Web Design",
        desc: "Web design is the process of creating visually appealing and functional websites, encompassing layout, color schemes, typography, and imagery. It involves user experience (UX) and interface design (UI) to ensure usability and accessibility.",
        img: "https://www.tgs.net.in/images/web%20design1.jpg",
    },
    {
        key: 2,
        className: "banner-2",
        title: "Web Developer",
        desc: "A web developer creates and maintains websites using HTML, CSS, and JavaScript, and frameworks like React or Angular. They manage both front-end and back-end, ensuring websites are functional, visually appealing, and optimized for performance.",
        img: "https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_640.png",
    },

    {
        key: 3,
        className: "banner-3",
        title: "UX/UI Design",
        desc: "Interface) refer to the aspects of user interaction with digital products. UX focuses on improving overall satisfaction and usability through research and analysis. UI focuses on designing user interfaces to ensure they are user-friendly and visually appealing",
        img: "https://www.zestbrains.com/assets/images/ui-ux-design/ui-ux-design.png",
    },
];

const Slider = () => {
    const next = () => {
        carouselRef.next();
    };

    const prev = () => {
        carouselRef.prev();
    };

    let carouselRef;

    return (
        <div className="slider">
            <Carousel autoplay ref={(el) => (carouselRef = el)}>
                {banners.map((item) => (
                    <div key={item.key} className={`banners ${item.className}`}>
                        <Row>
                            <Col span={18}>
                                <h3 className="title-slider">{item.title}</h3>
                                <p className="desc-slider">{item.desc}</p>
                                <Button className="register-btn">Register now</Button>
                            </Col>

                            <Col span={6}>
                                {" "}
                                <img
                                    src={item.img}
                                    alt=""
                                    className="slider-img"
                                />
                            </Col>
                        </Row>
                        <Row></Row>
                    </div>
                ))}
            </Carousel>
            <Button className="slider-btn prev-btn" onClick={prev}>
                <LeftOutlined />
            </Button>
            <Button className="slider-btn next-btn" onClick={next}>
                <RightOutlined />
            </Button>
        </div>
    );
};

export default Slider;
