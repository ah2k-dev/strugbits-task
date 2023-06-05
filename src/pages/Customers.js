import React from "react";
import Header from "../layout/Header.js";
import { Button, Col, Row } from "antd";
import { FaSort } from "react-icons/fa";
import CustomerRow from "../components/CustomerRow.js";

const Customers = () => {
  return (
    <div>
      <Header active={"CUSTOMERS"} />
      <div className="customer-container">
        <div className="new-customer">
          <Button className="new-customer-btn">+ Add Customer</Button>
        </div>
        <Row className="table-head">
          <Col span={4}></Col>
          <Col span={4}>
            <a className="table-head-item">
              <span>Customer ID#</span>
              <FaSort />
            </a>
          </Col>
          <Col span={5}>
            <a className="table-head-item">
              <span>Customer Name </span>
              <FaSort />
            </a>
          </Col>
          <Col span={5}>
            <a className="table-head-item">
              <span>Email</span>
              <FaSort />
            </a>
          </Col>
          <Col span={5}></Col>
        </Row>
        <div className="table-data">
          <CustomerRow
            data={{
              dp: "https://i.pravatar.cc/150?img=1",
              id: "123456",
              name: "John Doe",
              email: "ah2k@gmail.com",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Customers;
