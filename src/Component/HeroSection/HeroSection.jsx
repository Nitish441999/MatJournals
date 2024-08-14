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
      
      <section className='h-screen flex justify-center items-center'>
        <div className='w-full max-w-6xl h-auto flex flex-col gap-5 p-8 bg-white rounded-lg shadow-lg'>
          <div className='flex flex-col md:flex-row gap-5'>
            {/* Image Section */}
            <div className='w-full md:w-1/2 h-auto rounded-full overflow-hidden flex justify-center items-center relative'>
              <img
                className='w-full h-full object-cover'
                src='https://static.wixstatic.com/media/c837a6_a5f904abc9224779abfc65cb53fa6ba7~mv2.jpg/v1/crop/x_158,y_151,w_1117,h_1117/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/gettyimages-1284121212-2048x2048_edited_.jpg'
                alt='Developer'
              />
              <div className='absolute inset-0 border-8 border-transparent rounded-full animate-spin-slow' style={{ borderColor: 'rgba(128, 128, 128, 0.5)' }}></div>
            </div>

            {/* Text Section */}
            <div className='w-full md:w-1/2 flex flex-col justify-center'>
              <h1 className='text-4xl font-bold mb-4 text-red-600'>Hello</h1>
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
                I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
              </p>
              <div className='flex flex-col md:flex-row gap-5'>
                <div className='w-full md:w-36 h-36 bg-gray-200 rounded-full flex justify-center items-center relative cursor-pointer'>
                  <Link to="/resume" className='text-center text-lg font-semibold uppercase'>Resume</Link>
                </div>
                <div className='w-full md:w-36 h-36 bg-gray-200 rounded-full flex justify-center items-center relative cursor-pointer'>
                  <Link to="/projects" className='text-center text-lg font-semibold uppercase'>Project</Link>
                </div>
                <div className='w-full md:w-36 h-36 bg-gray-200 rounded-full flex justify-center items-center relative cursor-pointer'>
                  <Link to="/contact" className='text-center text-lg font-semibold uppercase'>Contact</Link>
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
