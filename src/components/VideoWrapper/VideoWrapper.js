import React from "react";
import Accordion from "../Accordion/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/pro-regular-svg-icons";
import "./VideoWrapper.css";

const VideoWrapper = ({ children, title = "" }) => {
  return (
    <div className="video-wrapper">
      <Accordion>
        <Accordion.Header>
          <span className="title"><strong>{title}</strong></span>
          <span className="icon">
            <FontAwesomeIcon icon={faAngleRight} fixedWidth />
          </span>
        </Accordion.Header>
        <Accordion.Body>
          <div className="iframe-wrapper">
            {children}
          </div>
        </Accordion.Body>
      </Accordion>
    </div>
  );
}

export default VideoWrapper;