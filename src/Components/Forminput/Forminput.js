import React from "react";

import "./Forminput.scss";

const Forminput = ({ handleChange, label, ...otherProps }) => (
  <div>
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default Forminput;
