import React from "react";
import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="contact bg-[#3c3a40] text-white py-6">
      <div className="max-w-[1100px] m-auto ">
        <div className="text-center">
          <p className=" text-4xl font-bold border-b-4 inline border-pink-600 ">
            Contact
          </p>
          <ul className="flex flex-col gap-2 my-10">
            <li>
              <a href="mailto:khanhngoc0102@gmail.com">
                <AiOutlineMail className="inline mx-2 " size={25} />
                khanhngoc0102@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:714-851-0282">
                <FiPhoneCall className="inline mx-2" size={22} />
                714-851-0282
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nathan-nguyen-a5b15122a/"
                target="_blank"
              >
                <AiOutlineLinkedin className="inline mx-2" size={25} />
                Linkedin
              </a>
            </li>

            <li>
              <a href="https://github.com/nathannguyen0102" target="_blank">
                <AiOutlineGithub className="inline mx-2" size={25} />
                Github
              </a>
            </li>
          </ul>
          <p className="mb-3">Created by Nathan Nguyen 2023</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
