import React from "react";
import { FaUsers, FaDollarSign, FaChartLine, FaClock } from "react-icons/fa";
import Box from "./Box";
import Graph from "./Graph";
import ActivityGraph from "./ActivityGraph";
import RecentActivity from "./RecentActivity";

const MainContent = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        <Box
          title="Total Users"
          value="24,892"
          growth="+12.5%"
          Icon={FaUsers}
        />

        <Box
          title="Revenue"
          value="$284,392"
          growth="+18.2%"
          Icon={FaDollarSign}
        />

        <Box
          title="Active Sessions"
          value="1,284"
          growth="-2.4%"
          Icon={FaClock}
        />

        <Box
          title="Conversion Rate"
          value="24.8%"
          growth="+4.1%"
          Icon={FaChartLine}
        />
        {/* Graph Box */}
      </div>
      <div className="flex justify-between  w-full ">
        <Graph />
        <ActivityGraph />
      </div>
      <div className=" mt-10">
        <RecentActivity />
      </div>
    </>
  );
};

export default MainContent;
