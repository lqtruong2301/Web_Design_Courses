import React from "react";
import { Link, useNavigation } from "react-router-dom";
import "./Navigation.css";
import { Col, Row, Typography, Button } from "antd";
import Logo from "../../assets/logo/Logo.svg";

const MyComponent = () => {
    return (
        <div class="nav-content">
            <div class="nav-body">
                <a href="#">
                    <img
                        src= {Logo}
                        alt="Besnik."
                        class="logo"
                    />
                </a>
                <nav class="nav">
                    <ul class="nav-list">
                        <li>
                            <a href="#!">Home</a>
                        </li>
                        <li>
                            <a href="#!">Features</a>
                        </li>
                        <li>
                            <a href="#!">Pricing</a>
                        </li>
                        <li>
                            <a href="#!">About</a>
                        </li>
                        <li>
                            <a href="#!">Contact</a>
                        </li>
                    </ul>
                </nav>
                {/* <!-- Action --> */}
                <div class="nav-action">
                    <a href="#!" class="sign-in-btn">
                        Sign in
                    </a>
                    <a class="sign-up-btn">Sign up</a>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
