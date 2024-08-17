import React from 'react';
import { FaLinkedin, FaInstagramSquare, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <section className='px-6 sm:px-10 py-6 sm:py-10 bg-red-400'>
        <div className='flex flex-col md:flex-row justify-between items-center text-center md:text-left'>
          <div className='mb-4 md:mb-0'>
            <ul>
              <li className='text-lg sm:text-xl font-sans font-semibold'>Phone</li>
              <li className='text-md font-semibold text-white'>+91 9572576470</li>
            </ul>
          </div>
          <div className='mb-4 md:mb-0'>
            <ul>
              <li className='text-lg sm:text-xl font-sans font-semibold'>Email</li>
              <li className='text-md font-semibold text-white'>nitish44199@gmail.com</li>
            </ul>
          </div>
          <div className='mb-4 md:mb-0'>
            <ul>
              <li className='text-lg sm:text-xl font-sans font-semibold'>Follow Me</li>
              <ul className='flex justify-center md:justify-start gap-3 mt-2 text-white'>
                <li className='text-2xl'>
                  <Link to="https://www.linkedin.com/in/nitish-kumar-416717251/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin aria-label="LinkedIn" />
                  </Link>
                </li>
                <li className='text-2xl'>
                  <Link to="https://www.instagram.com/am_nitish_yadav/" target="_blank" rel="noopener noreferrer">
                    <FaInstagramSquare aria-label="Instagram" />
                  </Link>
                </li>
                <li className='text-2xl'>
                  <Link to="https://github.com/Nitish441999" target="_blank" rel="noopener noreferrer">
                    <FaGithub aria-label="GitHub" />
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
          <div>
            <p className='text-sm md:text-base'>By Nitish Kumar.</p>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
