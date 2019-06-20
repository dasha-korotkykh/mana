import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowUp } from "@fortawesome/pro-regular-svg-icons";
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
    backToTop: backToTopLabel = "back to top"
  },
  ...rest
}) => (
  <div className="caption" {...rest}>
    <small className="caption__info">
      <em className="caption__number">
        {caseLabel} {number}
      </em>
      <a className="caption__back-to-top" href="#table-of-contents">
        <FontAwesomeIcon icon={faLongArrowUp} /> {backToTopLabel}
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
    backToTop: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    difficulty: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    objectives: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  })
};

Caption.defaultProps = {
  labels: {
    case: "Case",
    backToTop: "back to top",
    difficulty: "Difficulty:",
    objectives: "Objectives:"
  }
};

export default Caption;
