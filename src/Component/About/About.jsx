import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaGithub, FaBootstrap, FaGitAlt, FaDatabase, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiOracle, SiVisualstudiocode, SiMongodb, SiExpress, SiMongoose } from 'react-icons/si';
import DownloadCv from '../../assets/Resume.pdf';

function About() {
  return (
    <div className="flex flex-col justify-between bg-gray-100">
      <section className="flex-grow p-4 md:p-8">
        <div className="max-w-7xl mx-auto bg-white shadow-sm p-4 md:p-6 rounded-lg">
          {/* Introduction Section */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-rose-500">About Me</h1>
          </div>

          {/* Button Container */}
          <div className="flex justify-end mb-6">
            <a
              href={DownloadCv}
              download="Nitish-Kumar-Resume.pdf"
              className="inline-block bg-rose-500 text-white py-2 px-6 rounded-lg hover:bg-rose-600 transition"
            >
              Download CV
            </a>
          </div>

          {/* Introduction Text */}
          <div className="text-center mb-10">
            <p className="mt-4 text-base md:text-lg text-gray-600 text-justify">
              <strong className='text-2xl font-bold text-rose-500'>Hi</strong>, I'm Nitish Kumar, a passionate Fullstack Developer specializing in building and designing responsive web applications.
              I have a deep love for coding and a strong commitment to creating high-quality, efficient, and scalable solutions. 
              My journey in web development started during my college days, and since then, I've continuously strived to improve my skills and stay updated with the latest technologies.
              I'm always eager to take on new challenges and contribute to exciting projects that make a difference.
            </p>
          </div>

          {/* Professional Journey */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-rose-500 mb-4 max-sm:text-center">Professional Journey</h2>
            <p className="text-base md:text-lg text-gray-600 text-justify">
              <strong className='text-2xl font-bold text-rose-500'>I</strong> hold a B-Tech degree from Durgapur Institute of Advanced Technology and Management, Durgapur, West Bengal. I have experience working as a Web Developer at Namrata Universal, where I was responsible for designing and developing front-end applications. My journey has equipped me with a strong foundation in both front-end and back-end technologies, enabling me to build robust and user-friendly applications.
            </p>
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-center text-rose-500 mb-6">My Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
              <div className="flex flex-col items-center">
                <FaHtml5 className="text-4xl text-red-500 mb-2" />
                <p className="text-sm md:text-base text-gray-700">HTML</p>
              </div>
              <div className="flex flex-col items-center">
                <FaCss3Alt className="text-4xl text-blue-500 mb-2" />
                <p className="text-sm md:text-base text-gray-700">CSS</p>
              </div>
              <div className="flex flex-col items-center">
                <FaJs className="text-4xl text-yellow-500 mb-2" />
                <p className="text-sm md:text-base text-gray-700">JavaScript</p>
              </div>
              <div className="flex flex-col items-center">
                <FaReact className="text-4xl text-blue-400 mb-2" />
                <p className="text-sm md:text-base text-gray-700">React</p>
              </div>
              <div className="flex flex-col items-center">
                <FaNodeJs className="text-4xl text-green-500 mb-2" />
                <p className="text-sm md:text-base text-gray-700">Node.js</p>
              </div>
              <div className="flex flex-col items-center">
                <SiExpress className="text-4xl text-gray-800 mb-2" />
                <p className="text-sm md:text-base text-gray-700">Express</p>
              </div>
              <div className="flex flex-col items-center">
                <SiMongodb className="text-4xl text-green-600 mb-2" />
                <p className="text-sm md:text-base text-gray-700">MongoDB</p>
              </div>
              <div className="flex flex-col items-center">
                <SiMongoose className="text-4xl text-red-600 mb-2" />
                <p className="text-sm md:text-base text-gray-700">Mongoose</p>
              </div>
              <div className="flex flex-col items-center">
                <SiTailwindcss className="text-4xl text-teal-500 mb-2" />
                <p className="text-sm md:text-base text-gray-700">Tailwind CSS</p>
              </div>
              <div className="flex flex-col items-center">
                <FaGitAlt className="text-4xl text-orange-500 mb-2" />
                <p className="text-sm md:text-base text-gray-700">Git</p>
              </div>
              <div className="flex flex-col items-center">
                <FaDatabase className="text-4xl text-blue-500 mb-2" />
                <p className="text-sm md:text-base text-gray-700">SQL</p>
              </div>
              <div className="flex flex-col items-center">
                <SiFirebase className="text-4xl text-yellow-500 mb-2" />
                <p className="text-sm md:text-base text-gray-700">Firebase</p>
              </div>
              <div className="flex flex-col items-center">
                <FaJava className="text-4xl text-red-600 mb-2" />
                <p className="text-sm md:text-base text-gray-700">Java</p>
              </div>
              <div className="flex flex-col items-center">
                <FaGithub className="text-4xl text-gray-800 mb-2" />
                <p className="text-sm md:text-base text-gray-700">GitHub</p>
              </div>
              <div className="flex flex-col items-center">
                <SiOracle className="text-4xl text-red-600 mb-2" />
                <p className="text-sm md:text-base text-gray-700">Oracle 11g</p>
              </div>
              <div className="flex flex-col items-center">
                <SiVisualstudiocode className="text-4xl text-blue-500 mb-2" />
                <p className="text-sm md:text-base text-gray-700">VS Code</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
