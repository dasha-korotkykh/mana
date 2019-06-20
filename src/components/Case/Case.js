import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowUp } from "@fortawesome/pro-regular-svg-icons";
import "./Case.css";

const Case = ({
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
  <div className="case" {...rest}>
    <small className="case__info">
      <em className="case__number">
        {caseLabel} {number}
      </em>
      <a className="case__back-to-top" href="#table-of-contents">
        <FontAwesomeIcon icon={faLongArrowUp} /> {backToTopLabel}
      </a>
    </small>
    <h3 className="case__name">
      {name}
    </h3>
    <small className="case__meta">
      <strong>{difficultyLabel}</strong> {difficulty}{" "}
      <strong>{objectivesLabel}</strong> {objectives}
    </small>
  </div>
);

Case.propTypes = {
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

Case.defaultProps = {
  labels: {
    case: "Case",
    backToTop: "back to top",
    difficulty: "Difficulty:",
    objectives: "Objectives:"
  }
};

export default Case;
