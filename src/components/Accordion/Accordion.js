import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Header = ({ children, ...props }) => {
  const randomId = Math.random().toString(36);
  const { className, id = randomId } = props;
  const classNames = classnames("accordion-header", className);
  return (
    <React.Fragment>
      <input type="checkbox" id={id} hidden />
      <label className={classNames} htmlFor={id}>
        {children}
      </label>
    </React.Fragment>
  );
}

Header.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  id: PropTypes.string
}

const Body = ({ children, ...props }) => {
  const { className, ...otherProps } = props;
  const classNames = classnames("accordion-body", className);
  return (
    <div className={classNames} {...otherProps}>
      {children}
    </div>
  );
}

Body.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
}

const Accordion = ({ children, ...props }) => {
  const { className, ...otherProps } = props
  const classNames = classnames("accordion", className)
  return (
    <div className={classNames} {...otherProps}>
      {children}
    </div>
  );
}

Accordion.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
}

Accordion.Body = Body;
Accordion.Header = Header;

export default Accordion;