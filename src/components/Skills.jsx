import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-screen bg-[#D9D9D9] text-[gray-300] py-4"
    >
      {/* Container */}
      <div className="max-w-[1100px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-[#000000fe] py-1">
            Skills
          </p>
          <p className="pt-10 pb-3 text-[#000000fe]">
            There are the technologies I haved worked with{" "}
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="  hover:scale-110 duration-400">
            <img className="w-20 mx-auto" src={HTML} alt="html" />
            <p className="my-4">HTML5</p>
          </div>
          <div className="  hover:scale-110 duration-400">
            <img className="w-20 mx-auto" src={CSS} alt="html" />
            <p className="my-4">CSS3</p>
          </div>
          <div className=" hover:scale-110 duration-400">
            <img className="w-20 mx-auto" src={JavaScript} alt="html" />
            <p className="my-4">Javascript</p>
          </div>
          <div className=" hover:scale-110 duration-400">
            <img className="w-20 mx-auto" src={ReactImg} alt="html" />
            <p className="my-4">React</p>
          </div>
          <div className=" hover:scale-110 duration-400">
            <img className="w-20 mx-auto" src={GitHub} alt="html" />
            <p className="my-4">Git</p>
          </div>
          <div className=" hover:scale-110 duration-400">
            <img className="w-20 mx-auto" src={Node} alt="html" />
            <p className="my-4">NodeJS</p>
          </div>
          <div className=" hover:scale-110 duration-400">
            <img className="w-20 mx-auto" src={Mongo} alt="html" />
            <p className="my-4">MongoDB</p>
          </div>
          <div className=" hover:scale-110 duration-400">
            <img className="w-20 mx-auto" src={Tailwind} alt="html" />
            <p className="my-4">Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
