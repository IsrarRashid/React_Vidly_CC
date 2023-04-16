import React from "react";

const Select = ({
  name,
  label,
  options,
  errors,
  ...rest
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        {...rest}
        className="form-control"
      >
        <option value="" />
        {options?.map(test => (
          <option
            key={test._id}
            value={test._id}
          >
            {test.name}
          </option>
        ))}
      </select>
      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

export default Select;
