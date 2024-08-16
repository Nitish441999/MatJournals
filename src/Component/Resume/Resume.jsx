import React from 'react';

const data = [
  {
    imageURL: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
    titel: "HTML"
  },
  {
    imageURL: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
    titel: "CSS"
  },
  {
    imageURL: "https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg",
    titel: "Bootstrap"
  },
  {
    imageURL: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
    titel: "Tailwind CSS"
  },
  {
    imageURL: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    titel: "Javascript"
  },
  {
    imageURL: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    titel: "React JS"
  },
  {
    imageURL: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
    titel: "Firebase"
  },
  {
    imageURL: "https://cdn.worldvectorlogo.com/logos/java-4.svg",
    titel: "Java"
  },
  {
    imageURL: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
    titel: "SQL"
  },
  {
    imageURL: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg",
    titel: "VS-Code"
  },
  {
    imageURL: "https://cdn.worldvectorlogo.com/logos/eclipse-11.svg",
    titel: "Eclipse IDE"
  },
  {
    imageURL: "https://cdn.worldvectorlogo.com/logos/oracle-6.svg",
    titel: "Oracle 11g"
  },
  {
    imageURL: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
    titel: "GitHub"
  }
];

function Resume() {
  return (
    <div className="flex flex-col justify-between bg-gray-100">
      <section className="flex-grow p-4 md:p-8">
        <div className="max-w-7xl mx-auto bg-white shadow-sm p-4 md:p-6 rounded-lg">
          {/* Resume Header */}
          <header className="relative flex items-center justify-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-rose-500 text-center">Nitish Kumar</h1>
            <p className="text-base md:text-lg text-gray-600 text-center absolute bottom-[-24px]">Fullstack Developer</p>
            <div className="absolute right-0">
              <a
                href="/path-to-your-resume.pdf"
                download="Nitish-Kumar-Resume.pdf"
                className="inline-block bg-rose-500 text-white py-2 px-4 rounded-lg hover:bg-rose-600 transition"
              >
                Download Resume
              </a>
            </div>
          </header>

          {/* Resume Content */}
          <div>
            {/* Experience */}
            <section className="mb-6">
              <h2 className="text-xl md:text-2xl font-semibold mb-3 text-rose-500">Experience</h2>
              <div>
                <p className="mb-2">
                  <strong>Web Developer</strong> at <strong>Namrata Universal</strong> <br />
                  <em>Noida - 25/08/2023</em>
                </p>
                <ul className="list-disc pl-5">
                  <li>Designed and developed user-friendly web applications using HTML, CSS, and JavaScript.</li>
                  <li>Implemented responsive front-end designs with Bootstrap and Tailwind CSS.</li>
                  <li>Built interactive user interfaces using React JS, with a focus on component-based architecture.</li>
                  <li>Integrated Firebase for authentication, database management, and real-time data updates.</li>
                  <li>Optimized websites for SEO to improve search engine rankings and drive organic traffic.</li>
                  <li>Collaborated with back-end developers to integrate APIs and enhance functionality.</li>
                  <li>Optimized website performance and ensured cross-browser compatibility.</li>
                </ul>
              </div>
            </section>

            {/* Education */}
            <section className="mb-6">
              <h2 className="text-xl md:text-2xl font-semibold mb-3 text-rose-500">Education</h2>
              <div>
                <p className="mb-2">
                  <strong>B-Tech</strong> at <strong>Durgapur Institute of Advanced Technology and Management</strong> <br />
                  <em>Durgapur, West Bengal - 09/2021</em>
                </p>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center py-3 text-rose-500">Skills</h2>
              <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                {data.map(skill => (
                  <li key={skill.titel} className="relative flex items-center justify-center group w-28 h-28">
                    <img
                      src={skill.imageURL}
                      alt={skill.titel}
                      className="w-24 h-24 md:w-24 md:h-24 transition-opacity duration-300 group-hover:opacity-50 "
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-white font-bold bg-black bg-opacity-60 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs md:text-base">
                      {skill.titel}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
