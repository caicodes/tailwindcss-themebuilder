import React from "react";
import {
  Adjustments,
  Camera,
  Cake,
  Cog,
} from "../components/svg/icons/Heroicons";
const Icons = () => {
  return (
    <div className="flex my-4 p-8 bg-base-100/30 rounded-md gap-4">
      <Adjustments />
      <Camera />
      <Cake />
      <Cog />
    </div>
  );
};

export default Icons;
