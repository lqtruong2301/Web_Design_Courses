import React from "react";
import "./Feature.css";
import { Row, Col } from "antd";
import live_class from "../../assets/feature_icon/live_class.svg";
import discuss from "../../assets/feature_icon/discuss.svg";
import task from "../../assets/feature_icon/task.svg";
import useViewport from "../../hooks/useViewport.jsx";


const items = [
  {
    key: "1",
    icon: live_class,
    title: "Live Class",
    content: "We are providing live classes with the best teacher for you",
  },
  {
    key: "2",
    icon: discuss,
    title: "Discuss",
    content: "Conversation with teachers or other students about tasks or any other things",
  },
  {
    key: "3",
    icon: task,
    title: "Task",
    content: "We give every one of our students tasks for gathering knowledge at home",
  },
];

const MyComponent = () => {
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 1024;
  return (
    <div className="feature">
      <div className="feature-top">
        <p className="label-feature">FEATURES</p>
        <h2 className="sub-title">We are providing suitable features for students.</h2>
        <p className="desc-feature">
          Read our awesome features that absolutely suit you. Explore the features and know the best.
        </p>
        
        <Row gutter={[16, 16]} style={{marginTop: "80px"}}>
          {items.map((item) => (
            <Col span={8} key={item.key}>
              <div className="feature-item">
                <img src={item.icon} alt={item.title} className="feature-icon" />
                <h3 className="feature-title">{item.title}</h3>
                {!isMobile ? (<p className="feature-content">{item.content}</p>):(<></>)}
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default MyComponent;
