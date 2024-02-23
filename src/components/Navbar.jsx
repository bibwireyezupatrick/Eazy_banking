import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hookbank" className="w-[124px] h-[32px]" />
      <ul className="sm:flex hidden justify-end items-end flex-1" >
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal list-none  text-[16px] cursor-pointer ${index === navLinks.legth - 1? "mr-0" : "mr-10"} text-white`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)} />
        <div className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-0 min-w-[140px] rounded-xl sidebar`}>
          <ul className="flex flex-col justify-end items-end flex-1 items-center" >
            {navLinks.map((nav) => (
              <li key={nav.id} className={`font-poppins font-normal text-[16px] list-none cursor-pointer ml-4 mb-4 text-white`}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>  
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
