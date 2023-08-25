import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";

const Work = () => {
  return (
    <div className="bg-[#F5F5F5] pb-10">
      <div name="work" className="max-w-[1100px] m-auto  md:h-screen ">
        <div className="max-w-[1000px]  flex flex-col justify-center w-full h-full ">
          <div>
            <p className="text-4xl font-bold border-b-4 border-pink-600 inline">
              Work
            </p>
            <p className="pt-8 pb-4">Check out some of my recent work</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="border-2 shadow-md bg-white">
              <div className=" h-[150px] overflow-y-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="hand watch"
                  src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnVybml0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                ></img>
              </div>
              <div>
                <p className="text-center text-xl mt-4 mb-3">Furniture</p>
                <p className="text-center">
                  A responsive ecommerce online store which apply customer
                  focus, enhancing customer satisfaction and many more features.
                </p>
                <p className="text-center mt-2"> HTML, CSS, Javascript</p>
                <ul className="flex justify-between mt-2 p-4 ">
                  <li className="flex gap-2 items-center text-[#3c3a40] ">
                    <a
                      className="flex gap-2 items-center"
                      href="https://github.com/nathannguyen0102/furniture"
                      target="_blank"
                    >
                      <AiOutlineGithub size={25} />
                      Github
                    </a>
                  </li>
                  <li className="flex gap-2 items-center border-2 border-[#3c3a40] bg-[#3c3a40] text-white   ">
                    <a
                      className="flex flex-center gap-2 "
                      href="https://nathannguyen0102.github.io/furniture/"
                      target="_blank"
                    >
                      <FiLogIn size={25} /> Visit
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-2 shadow-md bg-white ">
              <div className=" h-[150px] overflow-y-hidden">
                <img
                  className="w-full h-full object-cover  "
                  src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29va2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                ></img>
              </div>
              <div>
                <p className="text-center text-xl mt-4 mb-3 ">Food Recipe</p>
                <p className="text-center">
                  A cooking app designed for people who loves food to quickly
                  make any meal by leveraging Youtube's API and food API.
                </p>
                <p className="text-center mt-2">
                  {" "}
                  HTML, Node, Tailwind, Javascript{" "}
                </p>
                <ul className="flex justify-between mt-2 p-4 ">
                  <li className=" text-[#3c3a40] hover:text-pink-600">
                    <a
                      className="flex gap-2 items-center"
                      href="https://github.com/nathannguyen0102/foodRecipe"
                      target="_blank"
                    >
                      <AiOutlineGithub size={25} />
                      Github
                    </a>
                  </li>
                  <li className=" border-2 border-[#3c3a40] bg-[#3c3a40] text-white hover:text-pink-600  ">
                    <a
                      className="flex flex-center gap-2 "
                      href="https://nathannguyen0102.github.io/foodRecipe/index.html"
                      target="_blank"
                    >
                      <FiLogIn size={25} /> Visit
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-2 shadow-md bg-white ">
              <div className=" h-[150px] overflow-y-hidden">
                <img
                  className="w-full h-full object-cover "
                  src="https://images.unsplash.com/photo-1590987337605-84f3ed4dc29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHN1c2hpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                ></img>
              </div>
              <div>
                <p className="text-center text-xl mt-4 mb-3">Hokkaido Sushi</p>
                <p className="text-center">
                  A social media webpage for owner to upsell and take
                  reservation from customers.
                </p>
                <p className="text-center mt-2"> HTML, CSS, React, Tailwind </p>
                <ul className="flex justify-between mt-2 p-4 ">
                  <li className=" text-[#3c3a40] hover:text-pink-600">
                    <a
                      className="flex gap-2 items-center"
                      href="https://github.com/nathannguyen0102/hokkaidoSushi"
                      target="_blank"
                    >
                      <AiOutlineGithub size={25} />
                      Github
                    </a>
                  </li>
                  <li className=" border-2 border-[#3c3a40] bg-[#3c3a40] text-white hover:text-pink-600  ">
                    <a
                      className="flex flex-center gap-2 "
                      href="https://nathannguyen0102.github.io/hokkaidoSushi/"
                      target="_blank"
                    >
                      <FiLogIn size={25} /> Visit
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-2 shadow-md bg-white">
              <div className=" h-[150px] overflow-y-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="hand watch"
                  src="https://images.unsplash.com/photo-1482954363933-4bed6bbea570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGhhbmQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                ></img>
              </div>
              <div>
                <p className="text-center text-xl mt-4 mb-3">Hand Watch</p>
                <p className="text-center">
                  A responsive ecommerce online store which has shopping cart
                  and sign up pages for customers
                </p>
                <p className="text-center mt-2"> HTML, CSS, Javascript</p>
                <ul className="flex justify-between mt-2 p-4 ">
                  <li className="flex gap-2 items-center text-[#3c3a40] ">
                    <a
                      className="flex gap-2 items-center"
                      href="https://github.com/nathannguyen0102/ecommerceWatch"
                      target="_blank"
                    >
                      <AiOutlineGithub size={25} />
                      Github
                    </a>
                  </li>
                  <li className="flex gap-2 items-center border-2 border-[#3c3a40] bg-[#3c3a40] text-white   ">
                    <a
                      className="flex flex-center gap-2 "
                      href="https://nathannguyen0102.github.io/ecommerceWatch/"
                      target="_blank"
                    >
                      <FiLogIn size={25} /> Visit
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
