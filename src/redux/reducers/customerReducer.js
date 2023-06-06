import { customerConstants } from "../generalConstants.js";
export const customerReducer = (
  state = {
    customers: [],
    loading: false,
  },
  action
) => {
  switch (action.type) {
    case customerConstants.GET_CUSTOMERS_API_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case customerConstants.GET_CUSTOMERS_API_SUCCESS:
      localStorage.setItem("customers", JSON.stringify(action.payload));
      return {
        ...state,
        loading: false,
        customers: action.payload,
      };
    case customerConstants.GET_CUSTOMERS_API_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case customerConstants.ADD_CUSTOMER:
      let localCustomers = localStorage.getItem("customers");
      if (localCustomers) {
        localStorage.setItem(
          "customers",
          JSON.stringify([...JSON.parse(localCustomers), action.payload])
        );
      } else {
        localStorage.setItem("customers", JSON.stringify([action.payload]));
      }
      return {
        ...state,
        customers: [...state.customers, action.payload],
      };
    case customerConstants.DELETE_CUSTOMER:
      let localCustomers2 = localStorage.getItem("customers");
      if (localCustomers2) {
        localStorage.setItem(
          "customers",
          JSON.stringify([
            ...JSON.parse(localCustomers2).filter(
              (customer) => customer.id !== action.payload
            ),
          ])
        );
      }
      return {
        ...state,
        customers: [
          ...state.customers.filter(
            (customer) => customer.id !== action.payload
          ),
        ],
      };
    case customerConstants.UPDATE_CUSTOMER:
      let localCustomers3 = localStorage.getItem("customers");
      if (localCustomers3) {
        localStorage.setItem(
          "customers",
          JSON.stringify([
            ...JSON.parse(localCustomers3).map((customer) => {
              if (customer.id === action.payload.id) {
                return action.payload;
              } else {
                return customer;
              }
            }),
          ])
        );
      }
      return {
        ...state,
        customers: [
          ...state.customers.map((customer) => {
            if (customer.id === action.payload.id) {
              return action.payload;
            } else {
              return customer;
            }
          }),
        ],
      };
    case customerConstants.SORT_LIST:
      let localCustomers4 = localStorage.getItem("customers");
      if (localCustomers4) {
        const customers = JSON.parse(localCustomers4);
        const sortedCustomers = customers.sort((a, b) => {
          if (action.payload.sortType === "asc") {
            if (a[action.payload.sortField] > b[action.payload.sortField]) {
              return 1;
            } else if (
              a[action.payload.sortField] < b[action.payload.sortField]
            ) {
              return -1;
            } else {
              return 0;
            }
          } else {
            if (a[action.payload.sortField] < b[action.payload.sortField]) {
              return 1;
            } else if (
              a[action.payload.sortField] > b[action.payload.sortField]
            ) {
              return -1;
            } else {
              return 0;
            }
          }
        });
        localStorage.setItem("customers", JSON.stringify(sortedCustomers));
      }
      return {
        ...state,
        customers: [
          ...state.customers.sort((a, b) => {
            if (action.payload.sortType === "asc") {
              if (a[action.payload.sortField] > b[action.payload.sortField]) {
                return 1;
              } else if (
                a[action.payload.sortField] < b[action.payload.sortField]
              ) {
                return -1;
              } else {
                return 0;
              }
            }
            if (a[action.payload.sortField] < b[action.payload.sortField]) {
              return 1;
            }
            if (a[action.payload.sortField] > b[action.payload.sortField]) {
              return -1;
            }
            return 0;
          }),
        ],
      };
    default:
      return state;
  }
};
