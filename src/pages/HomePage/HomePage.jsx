import React from "react";
import { Link, useNavigation } from "react-router-dom";
import "./HomePage.css";
import { Layout } from "antd";
import MyHeader from "../../components/Header/Header";
import Hero from "../../pages/Hero/Hero"

const { Header, Content } = Layout;

const MyComponent = () => {
    return (
        <Layout className="styleLayout">
            <Header className="styleHeader">
                <MyHeader />
            </Header>
            <Content className="styleContent">
                <Hero />
            </Content>
        </Layout>
    );
};

export default MyComponent;