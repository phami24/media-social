import React from "react";
import { TbCircleDashed } from "react-icons/tb";
export const ProfileUserDetails = () => {
  return (
    <div className="py-10 w-full ">
      <div className="flex items-center">
        <div className="w-[15%]">
          <img
            className=" w-32 h-32 rounded-full"
            src="https://as2.ftcdn.net/v2/jpg/05/68/30/53/1000_F_568305351_DSHWQbwFdtgwoc2nwshHGALsQ6LxSHVe.jpg"
            alt=""
          />
        </div>
        <div className="ms-10 space-y-5 text-xs">
          <div className="flex space-x-10  items-center">
            <p>phaminh51104</p>
            <button>Edit Profile</button>
            <TbCircleDashed></TbCircleDashed>
          </div>

          <div className="flex space-x-10 ">
            <div>
              <span className="font-semibold mr-2">10</span>
              <span>posts</span>
            </div>
            <div>
              <span className="font-semibold mr-2">5</span>
              <span>flowwer</span>
            </div>
            <div>
              <span className="font-semibold mr-2 ">7</span>
              <span>flowwing</span>
            </div>
          </div>

          <div>
            <p className="font-semibold">Minh Phạm</p>
            <p className="font-thin text-sm">Lập trình viên đẹp trai nhất 🐞| MP 🌟| Phamiz💡</p>
          </div>
        </div>
      </div>
    </div>
  );
};
