import React from "react";
import PropTypes from "prop-types";

const Button = ({ value, onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Button;
