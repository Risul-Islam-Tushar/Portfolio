/* eslint-disable react/no-unescaped-entities */

// import HeroImage from "../assets/heroImage.png";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import profile from "../assets/portfolioImg.jpeg";

const Home = () => {
  return (
    <div
      name="home"
      className=" w-full bg-gradient-to-b from-black via-black to-gray-800 py-10"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full  ">
          <h2 className="text-3xl font-semibold text-sky-700 italic pb-2">
            Hello
            <span className="text-4xl animate-wave"> 🤚 </span>
          </h2>
          <h2 className="text-3xl sm:text-4xl  font-bold text-sky-700">
            I'm a MERN Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            an experienced software engineer specializing in web development.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Node, MongoDB.
          </p>

          <div>
            <div className="mx-10 sm:mt-4 mb-6 md:mt-10  flex justify-center gap-8 ">
              <a
                className=" hover:scale-150 duration-200 shadow-lg shadow-sky-700 rounded-full"
                href="https://github.com/Risul-Islam-Tushar"
              >
                <FaGithub size={30} />
              </a>
              <a
                className="hover:scale-150 duration-200 shadow-lg shadow-sky-700 rounded-full"
                href="https://www.linkedin.com/in/Risul-Islam-Tushar/"
              >
                <FaLinkedinIn size={30} />
              </a>
              <a
                className="hover:scale-150 duration-200 shadow-lg shadow-sky-700 rounded-full"
                href=""
              >
                <HiOutlineMail size={30} />
              </a>
            </div>
          </div>
        </div>

        <div>
          <img
            alt="my profile"
            className="pt-3 rounded-full mx-auto w-2/3 h-3/3 shadow-2xl shadow-sky-700 hover:scale-110 duration-150"
            src={profile}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
