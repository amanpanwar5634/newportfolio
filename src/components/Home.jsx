import React from "react";

import pic from "../../public/photo.avif";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
          <span className="text-xl">Welcome to My World of Code</span>
    <div className="flex space-x-1 text-2xl md:text-4xl">
      <h1>Hello, I'm a</h1>
      <ReactTyped
        className="text-red-700 font-bold"
        strings={["Developer", "Programmer", "Problem Solver"]}
        typeSpeed={40}
        backSpeed={50}
        loop={true}
      />
    </div>
    <br />
    <p className="text-sm md:text-md text-justify">
      Web development fascinates me because it merges creativity and logic to create something impactful. I love how it enables ideas to come alive, allowing users to interact with a vision through seamless interfaces. The ever-evolving technologies in web development fuel my curiosity and drive to learn, pushing me to stay innovative and adapt to new trends. There’s something profoundly rewarding about solving challenges, building applications that connect people, and crafting designs that leave a lasting impression. For me, web development isn’t just coding—it’s a medium to shape the digital world.
    </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://github.com/amanpanwar5634/" target="_blank">
                    <FaGithub className="text-gray-800 text-2xl" />
                    </a>
                  </li>
                  <li>
                    <a href="http://linkedin.com/in/aman-panwar-aa2506319/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                     
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
