import { Button, Col, Row } from "antd";
import React from "react";

const CustomerRow = ({ data }) => {
  return (
    <Row className="customer-row" align={"middle"}>
      <Col span={4} className="dp-col">
        <img src={data.dp} alt="dp" />
      </Col>
      <Col
        span={4}
        style={{
          fontSize: "large",
        }}
      >
        <span>{data.id}</span>
      </Col>
      <Col
        span={5}
        className="name-col"
        style={{
          fontSize: "large",
        }}
      >
        <span>{data.name}</span>
      </Col>
      <Col
        span={5}
        style={{
          fontSize: "large",
        }}
      >
        <span>{data.email}</span>
      </Col>
      <Col
        span={5}
        className="actions"
        style={{
          fontSize: "large",
        }}
      >
        <Button className="edit-btn">Edit</Button>
        <Button className="delete-btn">Delete</Button>
      </Col>
    </Row>
  );
};

export default CustomerRow;
