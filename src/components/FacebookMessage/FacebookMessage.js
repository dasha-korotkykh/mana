import React from "react";
// import PropTypes from "prop-types";
import classNames from "classnames";
import "./FacebookMessage.css";

const FacebookMessage = ({ children, small, subtle }) => {
  return (
    <div className={classNames("bubble", {
      "small": small,
      "subtle": subtle
    })}>
      {children}
    </div>
  );
}

FacebookMessage.propTypes = {};

FacebookMessage.defaultProps = {};

export default FacebookMessage;