/* eslint-disable react/no-unescaped-entities */

// import HeroImage from "../assets/heroImage.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import profile from "../assets/portfolioImg.jpeg";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full pb-4">
          <h2 className="text-4xl sm:text-5xl pt-20 md:text-6xl  font-bold text-sky-700">
            I'm a MERN Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            an experienced software engineer specializing in web development.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Node, MongoDB.
          </p>

          <div>
            <div className="mx-10 mt-10 flex justify-center gap-8 ">
              <a
                className=" hover:scale-110 shadow-lg shadow-sky-700 rounded-full"
                href="https://github.com/Risul-Islam-Tushar"
              >
                <FaGithub size={50} />
              </a>
              <a
                className="hover:scale-110 shadow-lg shadow-sky-700 rounded-full"
                href="https://www.linkedin.com/in/Risul-Islam-Tushar/"
              >
                <FaLinkedinIn size={50} />
              </a>
              <a
                className="hover:scale-110 shadow-lg shadow-sky-700 rounded-full"
                href=""
              >
                <HiOutlineMail size={50} />
              </a>
            </div>
          </div>
        </div>

        <div>
          <img
            alt="my profile"
            className="rounded-full mx-auto w-2/3 h-3/3  shadow-2xl shadow-sky-700 hover:scale-110 duration-150"
            src={profile}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
