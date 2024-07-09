import  { useState } from "react";
import Icon from "./images/Logo.png";
import { Link, useLocation } from "react-router-dom";

import { FiBell } from "react-icons/fi";
import { LuBellRing } from "react-icons/lu";
const NavbarLogin = () => {
  const location = useLocation(); // Lấy đường dẫn hiện tại

  const isActive = (path) => location.pathname === path;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="font-bromega-regular">
      <nav className="bg-custom-blue px-2 p-1 sm:h-auto sm:w-full w-screen z-20 left-0 right-0 top-0 border-b border-gray-300">
        {/* Desktop nav */}
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto sm:px-4 pb-2 pt-2 text-black">
          <Link to="/" className="flex items-start">
            <img
              src={Icon}
              alt="icon"
              className="hidden sm:block sm:w-[45px] sm:-h-[35px] -mt-1"
            />
          </Link>
          <div className="flex">
            <ul className="sm:flex justify-center hidden">
              <li
                className={`p-2 mr-2 font-bold cursor-pointer ${isActive("/")
                  ? "text-customBlue border-b-2 border-customBlue"
                  : "hover:text-customBlue hover:border-b-2 hover:border-customBlue"
                  }`}
              >
                <Link to="/Homepage">Trang chủ</Link>
              </li>
              <li
                className={`p-2 mr-2 font-bold cursor-pointer ${isActive("/about")
                  ? "text-customBlue border-b-2 border-customBlue"
                  : "hover:text-customBlue hover:border-b-2 hover:border-customBlue"
                  }`}
              >
                <Link to="/about">Về chúng tôi</Link>
              </li>
              <li
                className={`p-2 mr-2 font-bold cursor-pointer ${isActive("/services")
                  ? "text-customBlue border-b-2 border-customBlue"
                  : "hover:text-customBlue hover:border-b-2 hover:border-customBlue"
                  }`}
              >
                <Link to="/services">Sản phẩm & Giải pháp</Link>
              </li>
              <li
                className={`p-2 mr-2 font-bold cursor-pointer ${isActive("/blogs")
                  ? "text-customBlue border-b-2 border-customBlue"
                  : "hover:text-customBlue hover:border-b-2 hover:border-customBlue"
                  }`}
              >
                <Link to="/blogs">Bài viết</Link>
              </li>
              <li
                className={`p-2 font-bold cursor-pointer ${isActive("/contact")
                  ? "text-customBlue border-b-2 border-customBlue"
                  : "hover:text-customBlue hover:border-b-2 hover:border-customBlue"
                  }`}
              >
                <Link to="/contact">Kết nối</Link>
              </li>
            </ul>
          </div>
          <div className="flex">
            <button
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {isHovered ? (
                <LuBellRing className="text-3xl text-customBlue mt-1 mr-3 w-8 h-8" />
              ) : (
                <FiBell className="text-3xl mt-1 mr-3 w-8 h-8" />
              )}
            </button>
            <div className=" w-12 h-12  border-b-4 border-white rounded-full overflow-hidden">
              <img
                className="object-fit object-cover w-full h-full rounded-full"
                src="https://scontent.xx.fbcdn.net/v/t1.15752-9/448193763_430485549895959_9028795443413084369_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEuLMLOLA1R8dX7dazhCuRpKm_x2WxSQGMqb_HZbFJAY8pl-iG-P94eVGo5lcY9720yST9UHTENMVK5EIsF0XHm&_nc_ohc=OQUeuhkSKx4Q7kNvgFSrTj8&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEv6BSKmdy6aDsVZ4OOhPJl6RArf9L8pnGvhe3zesF9Jg&oe=669CC516"
                alt={`${name}'s profile`}
              />
            </div>
          </div>
        </div>

        
      </nav>
    </div>
    
  );
};

export default NavbarLogin;
