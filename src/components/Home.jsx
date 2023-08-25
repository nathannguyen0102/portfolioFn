import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="bg-[#F5F5F5] h-screen w-full">
      {/* Container */}
      <div className="mx-auto max-w-[1100px] px-20 flex flex-col justify-center h-full text-white">
        <p className="text-[#000000fe]">Hi, my name is </p>
        <h1 className="text-4xl sm:text-6xl font-bold text-pink-600">
          Nathan Nguyen
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#000000b7]">
          I'm a Front End Web Developer.
        </h2>
        <p className="text-[#000000fe] py-4 max-w-[800px]">
          I am a front end web developer who have strong passion for coding and
          learning and have always been interested in technology. Recently
          obtained a Full Stack Development certification from UCI, I truly
          enjoy the process of designing and building websites and web
          applications, so let’s build something together!
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="group text-[#000000fe] border-2 border-black px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 hover:text-white">
              View Work
              <span className="group-hover:rotate-90 duration-400">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
