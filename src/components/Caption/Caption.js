import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowUp, faLongArrowDown } from "@fortawesome/pro-regular-svg-icons";
import "./Caption.css";

const Caption = ({
  number = "",
  name = "",
  difficulty = "",
  objectives = "",
  labels: {
    case: caseLabel = "Case",
    difficulty: difficultyLabel = "Difficulty:",
    objectives: objectivesLabel = "Objectives:",
    previous: previousLabel = "previous",
    next: nextLabel = "next"
  },
  ...rest
}) => (
  <div className="caption" {...rest}>
    <small className="caption__info">
      <em className="caption__number">
        {caseLabel} {number}
      </em>
      <a className="caption__previous" href="#">
        <FontAwesomeIcon icon={faLongArrowUp} /> {previousLabel}
      </a>
      <a className="caption__next" href="#">
        {nextLabel} <FontAwesomeIcon icon={faLongArrowDown} />
      </a>
    </small>
    <h3 className="caption__name">
      {name}
    </h3>
    <small className="caption__meta">
      <strong>{difficultyLabel}</strong> {difficulty}{" "}
      <strong>{objectivesLabel}</strong> {objectives}
    </small>
  </div>
);

Caption.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  difficulty: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  objectives: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  labels: PropTypes.shape({
    case: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    previous: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    next: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    difficulty: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    objectives: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  })
};

Caption.defaultProps = {
  labels: {
    case: "Case",
    previous: "previous",
    next: "next",
    difficulty: "Difficulty:",
    objectives: "Objectives:"
  }
};

export default Caption;
