/* eslint-disable react/no-unescaped-entities */

// import HeroImage from "../assets/heroImage.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 8 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p>

          <div>
            <div className="mx-10 mt-4 flex justify-start gap-6">
              <a
                className=" hover:scale-110"
                href="https://github.com/Risul-Islam-Tushar"
              >
                <FaGithub size={30} />
              </a>
              <a className="hover:scale-110" href="">
                <FaLinkedinIn size={30} />
              </a>
              <a className="hover:scale-110" href="">
                <HiOutlineMail size={32} />
              </a>
            </div>
          </div>
        </div>

        <div>
          <img
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
