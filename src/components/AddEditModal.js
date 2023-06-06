import { Button, Form, Input, Modal } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { addCustomer, updateCustomer } from "../redux/actions/customerActions";
const AddEditModal = ({ isEdit, data, open, setOpen }) => {
  const dispatch = useDispatch();
  const form = React.useRef(null);
  const [avatar, setAvatar] = React.useState(null);
  const onFinish = async (values) => {
    // let avatar = null;
    console.log("values", avatar);
    if (avatar) {
      const upload_preset = "lodgn_app";
      const cloud_name = "dusn1ns53";

      const formData = new FormData();

      formData.append("file", avatar);
      formData.append("upload_preset", upload_preset);
      formData.append("cloud_name", cloud_name);

      await axios
        .post(
          `https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        )
        .then(async (response) => {
          const data = await response.data;
          values.avatar = data.url;
          console.log("values", values);
        });
    }

    if (isEdit) {
      dispatch(
        updateCustomer({
          id: data.id,
          first_name: values.name,
          email: values.email,
          avatar: avatar ? values.avatar : data.avatar,
        })
      );
    } else {
      dispatch(
        addCustomer({
          id: Math.floor(Math.random() * 1000000000),
          first_name: values.name,
          // last_name: values.name,
          email: values.email,
          avatar: values.avatar,
        })
      );
    }
    setOpen(false);
    form.current.resetFields();
  };
  return (
    <Modal
      //   title={isEdit ? "Edit Customer" : "Add Customer"}
      visible={open}
      onCancel={() => setOpen(false)}
      footer={null}
    >
      <div className="add-modal-top">
        <span>{isEdit ? "Edit Customer" : "Add New Customer"}</span>
      </div>
      <div className="add-modal-body">
        <Form
          name="basic"
          initialValues={{
            name: isEdit ? `${data.first_name} ${data.last_name || ""}` : "",
            email: isEdit ? data.email : "",
            // avatar: isEdit ? data.avatar : "",
          }}
          ref={form}
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="avatar"
            // rules={[{ required: true, message: "Please input your avatar!" }]}
          >
            <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />
          </Form.Item>
          <Form.Item>
            <div className="action">
              <Button
                htmlType="submit"
                className="new-customer-btn"
                style={{
                  width: "100%",
                  height: "auto",
                  padding: "10px 0px",
                }}
              >
                {isEdit ? "Edit Customer" : "Add Customer"}
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default AddEditModal;
