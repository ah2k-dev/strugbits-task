import { Button, Col, Row } from "antd";
import React from "react";
import AddEditModal from "./AddEditModal";
import DeleteModal from "./DeleteModal";

const CustomerRow = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  return (
    <Row className="customer-row" align={"middle"}>
      <Col span={4} className="dp-col">
        <img src={data?.avatar} alt="dp" />
      </Col>
      <Col
        span={4}
        style={{
          fontSize: "large",
        }}
      >
        <span>{data?.id}</span>
      </Col>
      <Col
        span={5}
        className="name-col"
        style={{
          fontSize: "large",
        }}
      >
        <span>{`${data?.first_name} ${data.last_name || ""}`}</span>
      </Col>
      <Col
        span={5}
        style={{
          fontSize: "large",
        }}
      >
        <span>{data?.email}</span>
      </Col>
      <Col
        span={5}
        className="actions"
        style={{
          fontSize: "large",
        }}
      >
        <Button
          className="edit-btn"
          onClick={() => {
            setOpen(true);
          }}
        >
          Edit
        </Button>
        <Button
          className="delete-btn"
          onClick={() => {
            setOpen1(true);
          }}
        >
          Delete
        </Button>
      </Col>
      <AddEditModal open={open} setOpen={setOpen} isEdit={true} data={data} />
      <DeleteModal open={open1} setOpen={setOpen1} id={data?.id} />
    </Row>
  );
};

export default CustomerRow;
