import React, { Component } from "react";
import "./lifeCycle.styles.scss";
import { List } from "antd";
import cycle from "../../../Images/img_product_cycle.png";

const data = [
  {
    title: "1. Drop",
    color: "#6EBF49",
    feature1: "• Idea management.",
    feature2: "• Knowledge management."
  },
  {
    title: "2. Discover",
    color: "#138FD2",
    feature1: "• Workshops",
    feature2: "• Design thinking",
    feature3: "• Collecting Requirements."
  },
  {
    title: "3. Diagnose",
    color: "#FBAB18",
    feature1: "• Validation.",
    feature2: "• Focus groups.",
    feature3: "• Surveys.",
    feature4: "• Finance."
  },
  {
    title: "4. Design",
    color: "#005075",
    feature1: "• Agile.",
    feature2: "• Prototype / Wireframe.",
    feature3: "• Innovation."
  },
  {
    title: "5. Deliver",
    color: "#403152",
    feature1: "• Pilot.",
    feature2: "• Project management.",
    feature3: "• Lesson learned."
  }
];

export default class LifeCycle extends Component {
  render() {
    return (
      <div className="lifeCycleHeader">
        <div className="discoverWrapper">
          <h1>Process Lifecycle</h1>
          <p>
            Our Process will help you to drive the innovation and creativity
            culture to solve problems
          </p>
          <div style={{ marginTop: 88 }}>
            <img src={cycle} style={{ float: "left" }} />
            <div style={{ width: "50%", float: "right" }}>
              <List
                grid={{
                  gutter: 16,
                  xs: 1,
                  sm: 2,
                  md: 2,
                  lg: 2
                }}
                dataSource={data}
                renderItem={item => (
                  <List.Item>
                    <div>
                      <h3 className="title" style={{ color: item.color }}>
                        {item.title}
                      </h3>
                      <p className="feat">{item.feature1}</p>
                      <p className="feat">{item.feature2}</p>
                      <p className="feat">{item.feature3}</p>
                      <p className="feat">{item.feature3}</p>
                      {/* <div>
                        {item.feature.map((feat, index) => (
                          <p key={`_${index}`}> . {feat}</p>
                        ))}
                      </div> */}
                    </div>
                  </List.Item>
                )}
              />
              ,
            </div>
          </div>
        </div>
      </div>
    );
  }
}
