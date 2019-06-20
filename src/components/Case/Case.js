import React from "react";

const Case = ({ children }) => {
  return (
    <div className="hero hero-lg">
      <div className="hero-body">
        {children}
      </div>
    </div>
  );
}

export default Case;