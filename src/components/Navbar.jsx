import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineForm, AiOutlineDownload } from "react-icons/ai";
import { Link } from "react-scroll";
import { HiDownload } from "react-icons/hi";
import Resume from "../assets/resume.pdf";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192fe6] text-gray-300">
      <div>
        <p className="text-4xl text-pink-600 font-bold">Nathan</p>
      </div>

      {/* Navigation */}

      <ul className="hidden md:flex ">
        <li className="hover:text-pink-600">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li className="hover:text-pink-600">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-pink-600">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="hover:text-pink-600">
          <HiDownload className="inline" size={23} />
          <a href={Resume} download="Resume">
            Resume
          </a>
        </li>
        <li className="hover:text-pink-600">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamberger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-4 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li className="py-4 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-4 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-4 text-4xl">
          <a href={Resume} download="Resume">
            Resume
          </a>
        </li>
        <li className="py-4 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
