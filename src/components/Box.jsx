import React from "react";
import { FaUserAlt } from "react-icons/fa";
const Box = ({ title, value, growth, Icon }) => {
  // Check if growth is negative to apply the red color
  const growthColor =
    growth && growth.startsWith("-") ? "text-red-500" : "text-green-500";

  return (
    <div className="bg-white p-10 rounded-lg shadow-md flex items-center justify-between border border-gray-300 flex-wrap">
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <div className="text-lg font-semibold text-gray-500">{title}</div>
          {Icon && <Icon className="text-2xl text-gray-700" />}
        </div>
        <div className="flex items-center">
          <div className="text-xl mt-2 font-bold">{value}</div>
          {growth && (
            <div className={`text-sm mt-4 ml-2 font-medium ${growthColor}`}>
              {growth}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Box;
