import React from "react";
import {Link, useNavigation} from  "react-router-dom"
import MainContent from "../../components/MainContent/MainContent";
import "./HomePage.css"
import Navigation from "../../components/Navigation/Navigation"

const MyComponent = () => {
    return (
        <MainContent>
            <div>
                <Navigation />
            </div>
        </MainContent>

    );
};

export default MyComponent;
