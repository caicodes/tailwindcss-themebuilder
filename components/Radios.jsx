import React from "react";

const Radios = () => {
  return (
    <div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Red pill</span>
          <input
            type="radio"
            name="radio-6"
            className="radio checked:bg-red-500"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">blue pill</span>
          <input
            type="radio"
            name="radio-6"
            className="radio checked:bg-blue-500"
          />
        </label>
      </div>
      Range
      <input type="range" min="0" max="100" className="range" step="25" />
      <div className="w-full flex justify-between text-xs px-2">
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </div>
    </div>
  );
};

export default Radios;
