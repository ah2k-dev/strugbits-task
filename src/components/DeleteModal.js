import { Button, Modal } from "antd";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteCustomer } from "../redux/actions/customerActions";

const DeleteModal = ({ open, setOpen, id }) => {
  const dispatch = useDispatch();
  const deleteCust = () => {
    dispatch(deleteCustomer(id));
  };
  return (
    <Modal
      //   title="Delete Customer"
      visible={open}
      onCancel={() => setOpen(false)}
      footer={null}
    >
      <div className="delete-modal-content">
        <div>
          <MdDeleteOutline size={100} color="red" />
          <span>Are you sure?</span>
          <span>Do you really want to delete this customer?</span>
          <span>This process cannot be undone.</span>
        </div>
        <div className="del-actions">
          <Button
            className="cancel-btn"
            onClick={() => {
              setOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button className="del-btn" onClick={deleteCust}>
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
