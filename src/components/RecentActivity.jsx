import React from "react";
import { useSelector } from "react-redux";

const RecentActivity = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <div className="flex space-x-8 w-full">
        {/* Recent Activity Section */}
        <div className="bg-white p-8 rounded-lg shadow-md w-full lg:w-[48%] xl:w-[75%]">
          <div className="flex justify-between items-center mb-4">
            <div className="text-2xl font-semibold">Recent Activity</div>
          </div>

          {/* Recent Activity Entries */}
          <div className="space-y-4">
            {/* Activity 1 */}
            <div className="flex items-center space-x-4 border border-gray-300 p-4 rounded-lg">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Sarah Johnson"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold inline">
                  {user ? user.fullName : "User"}
                </p>{" "}
                <span className="font-semibold">created a new account</span>
                <p className="text-gray-500 text-sm">1 minute ago</p>
              </div>
            </div>

            {/* Activity 2 */}
            <div className="flex items-center space-x-4 border border-gray-300 p-4 rounded-lg">
              <img
                src="https://randomuser.me/api/portraits/men/44.jpg"
                alt="John Doe"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold inline">Michael Chen</p>{" "}
                <span className="font-semibold">updated user settings</span>
                <p className="text-gray-500 text-sm">5 minutes ago</p>
              </div>
            </div>

            {/* Activity 3 */}
            <div className="flex items-center space-x-4 border border-gray-300 p-4 rounded-lg">
              <img
                src="https://randomuser.me/api/portraits/women/55.jpg"
                alt="Emily Davis"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold inline">Emily Willsson</p>{" "}
                <span className="font-semibold">generated a new post</span>
                <p className="text-gray-500 text-sm">10 minutes ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* System status */}
        <div className="bg-white p-8 rounded-lg shadow-md w-full lg:w-[38%] xl:w-[48%] border border-gray-300">
          <div className="flex justify-between items-center mb-4 border-b border-gray-300 p-4">
            <div className="text-2xl font-semibold">System Status</div>
          </div>

          <div className="mt-2">
            <div className="p-2 rounded-lg">
              <div className="flex justify-between">
                <div className="font-semibold">CPU Usage</div>{" "}
                <span className="mt-1 text-base font-bold text-black">65%</span>
              </div>
              <div className="h-2"></div> {/* Blank line */}
              <div className="w-full bg-gray-200 h-4 rounded-full">
                <div
                  className="h-full bg-black rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
            <div className="p-2 rounded-lg">
              <div className="flex justify-between">
                <div className="font-semibold">Memory Usage</div>{" "}
                <span className="mt-1 text-base font-bold text-black">82%</span>
              </div>
              <div className="h-2"></div>
              <div className="w-full bg-gray-200 h-4 rounded-full">
                <div
                  className="h-full bg-black rounded-full"
                  style={{ width: "82%" }}
                ></div>
              </div>
            </div>

            <div className="p-2 rounded-lg">
              <div className="flex justify-between">
                <div className="font-semibold">Storage Usage</div>{" "}
                <span className="mt-1 text-base font-bold text-black">45%</span>
              </div>
              <div className="h-2"></div>
              <div className="w-full bg-gray-200 h-4 rounded-full">
                <div
                  className="h-full bg-black rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentActivity;
