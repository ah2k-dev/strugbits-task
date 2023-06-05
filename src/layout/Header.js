import React from "react";

const Header = ({ active }) => {
  return (
    <div className="header">
      <h1>{active}</h1>
    </div>
  );
};

export default Header;
