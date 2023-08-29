/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-sky-800">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          Hello there! I'm Risul Islam Tushar, a passionate MERN stack developer
          with a fresh perspective and a thirst for continuous learning. I
          recently graduated with a BSc in Computer Science and Engineering,
          where I honed my technical skills and gained a solid foundation in the
          world of software development.
        </p>

        <br />

        <p className="text-xl pb-20">
          I'm excited to contribute my skills and continue growing as a
          developer. Let's connect and explore how we can collaborate to bring
          remarkable ideas to life.
        </p>
      </div>
    </div>
  );
};

export default About;
