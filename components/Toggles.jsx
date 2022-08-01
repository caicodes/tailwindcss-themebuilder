import React from "react";

export const Toggles = () => {
  return (
    <div className="flex flex-col">
      <div className="container uppercase">toggles</div>
      <div className="container space-x-4">
        <input type="checkbox" className="toggle toggle-xs" />
        <input type="checkbox" className="toggle toggle-sm" />
        <input type="checkbox" className="toggle toggle-md" />
        <input type="checkbox" className="toggle toggle-lg" />
      </div>
      <div className="container">
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">primary</span>
            <input type="checkbox" className="toggle toggle-primary" />
          </label>
        </div>
      </div>
      <div className="container">
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">secondary</span>
            <input type="checkbox" className="toggle toggle-secondary" />
          </label>
        </div>
      </div>
      <div className="container">
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">accent</span>
            <input type="checkbox" className="toggle toggle-accent" />
          </label>
        </div>
      </div>
      <div className="container">
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">default</span>
            <input type="checkbox" className="toggle toggle-default " />
          </label>
        </div>
      </div>
    </div>
  );
};
