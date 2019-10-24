import React, { Component } from "react";
import { Row, Col } from "antd";
import details from "../../../Images/img_product-details.png";

class ProductDetails extends Component {
  render() {
    return (
      <div style={{ paddingTop: 148, paddingBottom: 148 }}>
        <div className="discoverWrapper">
          <Row gutter={16} className="planBlock">
            <Col span={10} xs={24} lg={12}>
              <section>
                <img src={details} />
              </section>
            </Col>
            <Col span={2} lg={2} />

            <Col span={10} xs={24} lg={12}>
              <section>
                <h3>HOME</h3>
                <p>
                  Get on top of your build, renovation, redecoration and
                  extension planning with Frond. Fill Frond's scrapbook with
                  inspirational photos, useful web-links and ideas. Create and
                  track essential tasks - and assign them to friends, family and
                  professionals using Frond's sharing capabilities. And keep
                  everything on track with using Frond's Timeline feature.
                </p>
                {/* <a href="/project-home">Read More</a> */}
              </section>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default ProductDetails;
