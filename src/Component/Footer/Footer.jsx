import React from 'react';
import { FaLinkedin, FaInstagramSquare, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <section className='px-10 py-10 bg-red-400'>
        <div className='flex justify-between items-center'>
          <div>
            <ul>
              <li className='text-xl font-sans font-semibold'>Phone</li>
              <li className='text-md font-semibold text-white'>+91 9572576470</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className='text-xl font-sans font-semibold'>Email</li>
              <li className='text-md font-semibold text-white'>nitish44199@gmail.com</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className='text-xl font-sans font-semibold'>Follow Me</li>
              <ul className='flex gap-2 mt-1 text-white'>
                <li className='text-2xl font-thin'>
                  <Link to="https://www.linkedin.com/in/nitish-kumar-416717251/">
                    <FaLinkedin aria-label="LinkedIn" />
                  </Link>
                </li>
                <li className='text-2xl font-thin'>
                  <Link to="https://www.instagram.com/am_nitish_yadav/">
                    <FaInstagramSquare aria-label="Instagram" />
                  </Link>
                </li>
                <li className='text-2xl font-thin'>
                  <Link to="https://github.com/Nitish441999">
                    <FaGithub aria-label="GitHub" />
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
          <div>
            <p>By Nitish Kumar.</p>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
