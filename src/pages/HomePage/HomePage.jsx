import React, { useRef } from "react";
import "./HomePage.css";
import { Layout } from "antd";
import MyHeader from "../../components/Header/Header";
import Hero from "../../pages/Hero/Hero";
import Feature from "../../pages/Feature/Feature";
import Course from "../../pages/Course/Course";
import ValueState from "../../pages//ValueState/ValueState";
import About from "../../pages/About/About";
import Slider from "../../pages/Slider/Slider";
import Contact from "../../pages/Contact/Contact";
import MyFooter from "../../components/Footer/MyFooter";

const { Header, Content, Footer } = Layout;

const MyComponent = () => {
    const [current, setCurrent] = React.useState("home");

    const featureRef = useRef(null);
    const courseRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToTop = () => {
        setCurrent("home");
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleScrollTo = (section) => {
        setCurrent(section);
        if (section === "home") {
            scrollToTop();
        } else {
            const sectionRefs = {
                features: featureRef,
                pricing: courseRef,
                about: aboutRef,
                contact: contactRef,
            };
            window.scrollTo({
                top: sectionRefs[section].current.offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <Layout className="styleLayout">
            <Header className="styleHeader">
                <MyHeader
                    current={current}
                    setCurrent={handleScrollTo}
                    scrollToTop={scrollToTop}
                />
            </Header>
            <Content className="styleContent">
                <div>
                    <Hero />
                </div>
                <div ref={featureRef}>
                    <Feature />
                </div>
                <div ref={courseRef}>
                    <Course />
                </div>
                <div>
                    <ValueState />
                </div>
                <div ref={aboutRef}>
                    <About scrollToTop={scrollToTop} />
                </div>
                <div>
                    <Slider />
                </div>
                <div ref={contactRef}>
                    <Contact />
                </div>
            </Content>
            <Footer className="style-footer">
                <MyFooter />
            </Footer>
        </Layout>
    );
};

export default MyComponent;
