import React from "react";
import Header from "../layout/Header.js";

const Customers = () => {
  return (
    <div>
      <Header active={"CUSTOMERS"} />
      <div className="customer-container">
        Customers
      </div>
    </div>
  );
};

export default Customers;
