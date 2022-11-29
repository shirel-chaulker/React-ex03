import React from "react";

export const FilterComponent = ({ handleChange }) => {
  return (
    <div class="input-group mb-3">
      <label class="input-group-text" for="inputGroupSelect01">
        Options
      </label>
      <select class="form-select" id="inputGroupSelect01">
        <option selected>Choose...</option>
      </select>
    </div>
  );
};
