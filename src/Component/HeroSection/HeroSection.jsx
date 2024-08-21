import React, { useState, useEffect } from 'react';
import "./style.css";
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

function HeroSection() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    // Check if the prompt has already been shown during this session
    const promptShown = sessionStorage.getItem('promptShown');

    if (!promptShown) {
      setShowPrompt(true);
      sessionStorage.setItem('promptShown', 'true');
    }

    // Get the current hour
    const currentHour = new Date().getHours();

    // Determine the greeting based on the current time
    if (currentHour >= 5 && currentHour < 12) {
      setGreeting('Good morning');
    } else if (currentHour >= 12 && currentHour < 17) {
      setGreeting('Good afternoon');
    } else if (currentHour >= 17 && currentHour < 21) {
      setGreeting('Good evening');
    } else {
      setGreeting('Good night');
    }

    if (showPrompt) {
      // Set a timer to hide the greeting after 2 seconds
      const timer = setTimeout(() => {
        setShowPrompt(false);
      }, 2000);

      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
  }, [showPrompt]);

  return (  
    <div>
      {/* Prompt Overlay */}
      {showPrompt && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center mt-10 z-50">
          <div className="bg-white h-20 w-96 p-4 rounded-lg shadow-lg text-center text-2xl">
            {greeting} sir and Mam
          </div>
        </div>
      )}
      
      <section className='flex justify-center items-center'>
        <div className='w-full max-w-7xl h-auto flex flex-col gap-5 p-8 bg-white rounded-lg shadow-lg'>
          <div className='flex flex-col md:flex-row gap-5'>
            {/* Image Section */}
            <div className='w-full md:w-1/2 h-auto rounded-full overflow-hidden flex justify-center items-center relative '>
              <img
                className='w-full h-full object-cover bg-gray-100'
                src='https://i.imgur.com/V1jQHWx.png'
                alt='Developer'
              />
              {/* <div className='absolute inset-0 border-8 border-transparent rounded-full animate-spin-slow' style={{ borderColor: 'rgba(128, 128, 128, 0.5)' }}></div> */}
            </div>

            {/* Text Section */}
            <div className='w-full md:w-1/2 flex flex-col justify-center'>
              <h1 className='text-4xl font-bold mb-4 text-rose-600'>Welcome</h1>
              <h3 className='text-2xl font-medium mb-2 uppercase text-red-500'>
                <TypeAnimation
                  sequence={[
                    'Web Developer', // Types 'Web Developer'
                    1000, // Waits 1 second
                    'Frontend Developer', // Types 'Frontend Developer'
                    1000, // Waits 1 second
                    'Responsive Design', // Types 'Responsive Design'
                    1000, // Waits 1 second
                    'React JS Developer', // Types 'React JS Developer'
                    1000, // Waits 1 second
                    'JavaScript Developer', // Types 'JavaScript Developer'
                    1000, // Waits 1 second
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  style={{ display: 'inline-block' }}
                />
              </h3>
              <p className='text-md font-light mb-4'>
                <strong className='text-3xl font-bold text-rose-500'>Hello!</strong> I'm Nitish Kumar, a dedicated Fullstack Developer with a passion for creating dynamic and responsive web applications. With expertise in modern technologies like React JS, JavaScript, and CSS frameworks, I specialize in delivering high-quality user experiences. Whether it's building interactive UIs or optimizing performance, I'm committed to delivering exceptional results. Explore my work and feel free to reach out for collaboration or inquiries.
              </p>
              <div className='flex flex-col md:flex-row  gap-5'>
                <div className='w-full md:w-36 h-36 hover:bg-rose-400 bg-gray-200 rounded-full flex justify-center items-center relative cursor-pointer'>
                  <Link to="/resume" className='text-center text-lg font-semibold uppercase'>Experience</Link>
                </div>
                <div className='w-full md:w-36 h-36 hover:bg-rose-400 bg-gray-200 rounded-full flex justify-center items-center relative cursor-pointer'>
                  <Link to="/projects" className='text-center text-lg font-semibold uppercase'>Projects</Link>
                </div>
                <div className='w-full md:w-36 h-36 hover:bg-rose-400 bg-gray-200 rounded-full flex justify-center items-center relative cursor-pointer'>
                  <Link to="/contact" className='text-center text-lg font-semibold uppercase'>Contact</Link>
                </div>
                <div className='w-full md:w-36 h-36 hover:bg-rose-400 bg-gray-200 rounded-full flex justify-center items-center relative cursor-pointer'>
                  <Link to="/about" className='text-center text-lg font-semibold uppercase'>About</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
