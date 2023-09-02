/* eslint-disable react/no-unescaped-entities */

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-6"
    >
      <div className="max-w-screen-lg  px-4  mx-auto flex flex-col justify-center w-full ">
        <div className="py-3">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-sky-800 ">
            About
          </p>
        </div>

        <p className="text-xl ">
          Hello there! I'm Risul Islam Tushar, a passionate MERN stack developer
          with a fresh perspective for continuous learning. I recently graduated
          with a BSc in Computer Science and Engineering, where I honed my
          technical skills and gained a solid foundation in the world of
          software development.
        </p>

        <br />

        <p className="text-xl ">
          I'm excited to contribute my skills and continue growing as a
          developer. Let's connect and explore how we can collaborate to bring
          remarkable ideas.
        </p>
      </div>
    </div>
  );
};

export default About;
