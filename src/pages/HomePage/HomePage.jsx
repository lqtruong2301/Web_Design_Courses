import React from "react";
import { Link, useNavigation } from "react-router-dom";
import "./HomePage.css";
import { Layout } from "antd";
import MyHeader from "../../components/Header/Header";
import Hero from "../../pages/Hero/Hero";
import Feature from "../../pages/Feature/Feature";
import Course from "../../pages/Course/Course"
import About from "../../pages/About/About";
import Slider from "../../pages/Slider/Slider";
import Contact from "../../pages/Contact/Contact";
import MyFooter from "../../components/Footer/MyFooter";
import ValueState from "../../pages/ValueState/ValueState";

const { Header, Content, Footer } = Layout;

const MyComponent = () => {
    return (
        <Layout className="styleLayout">
            <Header className="styleHeader">
                <MyHeader />
            </Header>
            <Content className="styleContent">
                <Hero />
                <Feature />
                <Course />
                <ValueState />
                <About />
                <Slider />
                <Contact />
            </Content>
            <Footer className="style-footer">
                <MyFooter />
            </Footer>
        </Layout>
    );
};

export default MyComponent;
