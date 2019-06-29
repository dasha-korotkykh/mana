import React from "react";
// import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/pro-regular-svg-icons";
import "./SlackMessageInput.css";

const SlackMessageInput = ({
  children
}) => {
  return (
    <div className="message-input">
      <div className="message-input__plus">
        <FontAwesomeIcon icon={faPlus} />
      </div>
      <div className="message-input__text">
        {children}
      </div>
    </div>
  );
}

export default SlackMessageInput;