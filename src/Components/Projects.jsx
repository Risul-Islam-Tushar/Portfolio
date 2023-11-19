import cover1 from "../assets/navbar.jpg";
import cover2 from "../assets/nobonocket.jpg";
import cover3 from "../assets/coffeeshop.jpg";
import cover4 from "../assets/waffle.jfif";
import cover5 from "../assets/dessert-bg.jpeg";
import cover6 from "../assets/bike-1.png";
const Projects = () => {
  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-6"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full   ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-sky-800 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={cover1}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <h1 className="text-center pt-3 text-2xl font-semibold text-sky-700">
              Phone-Traders
            </h1>
            <div className="flex items-center justify-center">
              <a
                href="https://phone-traders.web.app/"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
              >
                Site Link
              </a>
              <a
                href="https://github.com/Risul-Islam-Tushar/Phone-Traders.git"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
              >
                Code
              </a>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={cover2}
              alt=""
              className="rounded-md h-44 w-full duration-200 hover:scale-105"
            />
            <h1 className="text-center pt-3 text-2xl font-semibold text-sky-700">
              Nobonocket
            </h1>
            <div className="flex items-center justify-center">
              <a
                href="https://hoteltemplate-nobonocket.netlify.app/"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
              >
                Site Link
              </a>
              <a
                href="https://github.com/Risul-Islam-Tushar/Hotel-Website-Template.git"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
              >
                Code
              </a>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={cover3}
              alt=""
              className="rounded-md h-44 w-full duration-200 hover:scale-105"
            />
            <h1 className="text-center pt-3 text-2xl font-semibold text-sky-700">
              Roast & Revelay
            </h1>
            <div className="flex items-center justify-center">
              <a
                href="https://roastandrevelay.netlify.app/"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
              >
                Site Link
              </a>
              <a
                href="https://github.com/Risul-Islam-Tushar/CoffeeShop-Template.git"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
              >
                Code
              </a>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={cover4}
              alt=""
              className="rounded-md h-44 w-full duration-200 hover:scale-105"
            />
            <h1 className="text-center pt-3 text-2xl font-semibold text-sky-700">
              Xo Waffle
            </h1>
            <div className="flex items-center justify-center">
              <a
                href="https://xo-waffle.netlify.app/"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
              >
                Site Link
              </a>
              <a
                href="https://github.com/Risul-Islam-Tushar/WaffleShop-template.git"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
              >
                Code
              </a>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={cover5}
              alt=""
              className="rounded-md duration-200 hover:scale-105 h-44 w-full"
            />
            <h1 className="text-center pt-3 text-2xl font-semibold text-sky-700">
              BB-Restaurent
            </h1>
            <div className="flex items-center justify-center">
              <a
                href=""
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
              >
                Site Link
              </a>
              <a
                href="https://github.com/Risul-Islam-Tushar/BB_RESTAURENT.git"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
              >
                Code
              </a>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={cover6}
              alt=""
              className="rounded-md duration-200 hover:scale-105 h-44 w-full"
            />
            <h1 className="text-center pt-3 text-2xl font-semibold text-sky-700">
              Bikerz Zone
            </h1>
            <div className="flex items-center justify-center">
              <a
                href="https://roaring-raindrop-43c18d.netlify.app/"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
              >
                Site Link
              </a>
              <a
                href="https://github.com/Risul-Islam-Tushar/Bikerz-Zone.git"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
              >
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
