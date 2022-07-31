import React from "react";

const Alerts = () => {
  return (
    <div>
      <div className="mt-4 alert alert-info text-info-content/60">
        base-info-content/60
      </div>
      <div className="mt-4 alert alert-error text-error-content/60">
        text-error-content/60
      </div>
      <div className="mt-4 alert alert-success text-success-content/60">
        alert alert-success text-success-content/60
      </div>
      <div className="mt-4 alert alert-warning text-warning-content/60 ">
        alert alert-warning text-warning-content/60
      </div>
    </div>
  );
};

export default Alerts;
