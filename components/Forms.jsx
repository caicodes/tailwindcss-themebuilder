import React from "react";

export const FormExample = () => {
  return (
    <div className="flex space-x-10 mx-auto">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">What is your name?</span>
          <span className="label-text-alt">Alt label</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text-alt">Alt label</span>
          <span className="label-text-alt">Alt label</span>
        </label>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">What is your name?</span>
          <span className="label-text-alt">Alt label</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text-alt">Alt label</span>
          <span className="label-text-alt">Alt label</span>
        </label>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">What is your name?</span>
          <span className="label-text-alt">Alt label</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text-alt">Alt label</span>
          <span className="label-text-alt">Alt label</span>
        </label>
      </div>

      <div className="flex flex-col w-96 space-y-4">
        {" "}
        {/* <!-- xs --> */}
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-xs w-full max-w-xs"
        />
        {/* <!-- sm --> */}
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-sm w-full max-w-xs"
        />
        {/* <!-- md --> */}
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-md w-full max-w-xs"
        />
        {/* <!-- lg --> */}
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-lg w-full max-w-xs"
        />
      </div>

      <div className="flex flex-col w-96 space-y-8">
        <input type="checkbox" className="checkbox checkbox-xs" />
        <input type="checkbox" className="checkbox checkbox-sm" />
        <input type="checkbox" className="checkbox checkbox-md" />
        <input type="checkbox" className="checkbox checkbox-lg" />
      </div>
    </div>
  );
};
