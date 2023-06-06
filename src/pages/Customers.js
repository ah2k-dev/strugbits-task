import React, { useEffect, useState } from "react";
import Header from "../layout/Header.js";
import { Button, Col, Row } from "antd";
import { FaSort } from "react-icons/fa";
import CustomerRow from "../components/CustomerRow.js";
import { useSelector, useDispatch } from "react-redux";
import { getCustomers, sortList } from "../redux/actions/customerActions.js";
import AddEditModal from "../components/AddEditModal.js";

const Customers = () => {
  const dispatch = useDispatch();
  const { loading, customers } = useSelector((state) => state.customerReducer);
  const [open, setOpen] = useState(false);
  const [idSortType, setIdSortType] = useState("asc");
  const [nameSortType, setNameSortType] = useState("asc");
  const [emailSortType, setEmailSortType] = useState("asc");
  const sortId = () => {
    dispatch(sortList("id", idSortType));
    setIdSortType(idSortType === "asc" ? "desc" : "asc");
  };
  const sortName = () => {
    dispatch(sortList("first_name", nameSortType));
    setNameSortType(nameSortType === "asc" ? "desc" : "asc");
  };
  const sortEmail = () => {
    dispatch(sortList("email", emailSortType));
    setEmailSortType(emailSortType === "asc" ? "desc" : "asc");
  };
  useEffect(() => {
    dispatch(getCustomers());
  }, []);
  return (
    <div>
      <Header active={"CUSTOMERS"} />
      <div className="customer-container">
        <div className="new-customer">
          <Button className="new-customer-btn" onClick={() => setOpen(true)}>
            + Add Customer
          </Button>
        </div>
        <Row className="table-head">
          <Col span={4}></Col>
          <Col span={4}>
            <a className="table-head-item" onClick={sortId}>
              <span>Customer ID#</span>
              <FaSort />
            </a>
          </Col>
          <Col span={5}>
            <a className="table-head-item" onClick={sortName}>
              <span>Customer Name </span>
              <FaSort />
            </a>
          </Col>
          <Col span={5}>
            <a className="table-head-item" onClick={sortEmail}>
              <span>Email</span>
              <FaSort />
            </a>
          </Col>
          <Col span={5}></Col>
        </Row>
        <div className="table-data">
          {loading ? (
            <>loading...</>
          ) : (
            customers.length > 0 &&
            customers.map((customer) => (
              <CustomerRow key={customer.id} data={customer} />
            ))
          )}
        </div>
      </div>
      <AddEditModal open={open} setOpen={setOpen} isEdit={false} data={null} />
    </div>
  );
};

export default Customers;
