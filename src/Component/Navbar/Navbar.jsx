import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='bg-gray-300'>
      <div className='mx-auto bg-red-400'>
        <div className='flex justify-between px-10 py-5'>
          <div className='flex justify-center items-center gap-3'>
            <img
              className='h-10 w-10 rounded-full'
              src='https://static.wixstatic.com/media/c837a6_a5f904abc9224779abfc65cb53fa6ba7~mv2.jpg/v1/crop/x_158,y_151,w_1117,h_1117/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/gettyimages-1284121212-2048x2048_edited_.jpg'
              alt='Profile'
            />
            <Link
              className='text-xl font-sans font-semibold text-white'
              to='/'
            >
              Nitish Kumar
            </Link>
          </div>
          <div>
            <ul className='flex gap-5 text-xl font-thin  text-white'>
              <li className='cursor-pointer'>
                <Link to='/resume'>Resume</Link>
              </li>

              <span className='mx-2'>|</span>
              <li className='cursor-pointer'>
                <Link to='/projects'>Project</Link>
              </li>

              <span className='mx-2'>|</span>
              <li className='cursor-pointer'>
                <Link to='/contact'>Contact</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
