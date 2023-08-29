/* eslint-disable react/no-unescaped-entities */

import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import js from "../assets/javascript.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import github from "../assets/github.png";

const Experiances = () => {
  return (
    <div className="py-32 bg-gradient-to-b from-gray-800 to-black w-full ">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 text-sky-800 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-600">
            <img src={html} alt="" className="w-20 mx-auto" />
            <p className="mt-4">HTML</p>
          </div>

          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500">
            <img src={css} alt="" className="w-20 mx-auto" />
            <p className="mt-4">CSS</p>
          </div>

          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-400">
            <img src={tailwind} alt="" className="w-20 mx-auto" />
            <p className="mt-4">TAILWIND</p>
          </div>

          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-500">
            <img src={js} alt="" className="w-20 mx-auto" />
            <p className="mt-4">JS</p>
          </div>

          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-700">
            <img src={react} alt="" className="w-20 mx-auto" />
            <p className="mt-4">REACT</p>
          </div>

          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-green-700">
            <img src={node} alt="" className="w-20 mx-auto" />
            <p className="mt-4">NODE</p>
          </div>

          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-400                                            ">
            <img src={github} alt="" className="w-20 mx-auto" />
            <p className="mt-4">GIT HUB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiances;
