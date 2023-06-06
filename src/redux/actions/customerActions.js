import { message } from "antd";
import custAxios from "../../services/axiosConfig";
import { customerConstants } from "../generalConstants";

export const getCustomers = () => {
  return async (dispatch) => {
    dispatch({ type: customerConstants.GET_CUSTOMERS_API_REQUEST });
    try {
      const response = await custAxios.get("/");
      dispatch({
        type: customerConstants.GET_CUSTOMERS_API_SUCCESS,
        payload: response.data.data,
      });
    } catch (error) {
      dispatch({
        type: customerConstants.GET_CUSTOMERS_API_FAILURE,
        payload: error,
      });
      message.error({
        content: error.message,
        duration: 2,
        style: {
          marginTop: "20vh",
        },
      });
    }
  };
};

export const addCustomer = (customer) => {
  return (dispatch) => {
    dispatch({
      type: customerConstants.ADD_CUSTOMER,
      payload: customer,
    });
  };
};

export const deleteCustomer = (id) => {
  return (dispatch) => {
    dispatch({
      type: customerConstants.DELETE_CUSTOMER,
      payload: id,
    });
  };
};

export const updateCustomer = (customer) => {
  return (dispatch) => {
    dispatch({
      type: customerConstants.UPDATE_CUSTOMER,
      payload: customer,
    });
  };
};

export const sortList = (sortField, sortType) => {
  return (dispatch) => {
    dispatch({
      type: customerConstants.SORT_LIST,
      payload: { sortType, sortField },
    });
  };
};
