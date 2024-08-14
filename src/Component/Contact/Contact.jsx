import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-50'>
      <div className='flex flex-wrap max-w-6xl w-full bg-white p-10 rounded-lg shadow-lg'>
        {/* Contact Details */}
        <div className='w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 flex flex-col item-center'>
          <h2 className='text-3xl font-bold text-gray-800 mb-6'>Contact Details</h2>
          <div className='flex items-center mb-6'>
            <FaPhoneAlt className='text-blue-500 text-2xl mr-4' />
            <div>
              <h4 className='text-lg font-semibold text-gray-700'>Phone</h4>
              <p className='text-md text-gray-500'>+91 9572576470</p>
            </div>
          </div>
          <div className='flex items-center mb-6'>
            <FaEnvelope className='text-blue-500 text-2xl mr-4' />
            <div>
              <h4 className='text-lg font-semibold text-gray-700'>Email</h4>
              <p className='text-md text-gray-500'>nitish44199@gmail.com</p>
            </div>
          </div>
          <div className='flex items-center'>
            <FaMapMarkerAlt className='text-blue-500 text-2xl mr-4' />
            <div>
              <h4 className='text-lg font-semibold text-gray-700'>Address</h4>
              <p className='text-md text-gray-500'>123 Street Name, City, Country</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className='w-full md:w-1/2 flex flex-col'>
          <h2 className='text-3xl font-bold text-gray-800 mb-6'>Send a Message</h2>
          <form>
            <div className='mb-6'>
              <label
                className='block text-gray-700 text-md font-semibold mb-2'
                htmlFor='name'
              >
                Name
              </label>
              <input
                className='w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
                type='text'
                id='name'
                name='name'
                placeholder='Your Name'
                required
              />
            </div>
            <div className='mb-6'>
              <label
                className='block text-gray-700 text-md font-semibold mb-2'
                htmlFor='email'
              >
                Email
              </label>
              <input
                className='w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
                type='email'
                id='email'
                name='email'
                placeholder='Your Email'
                required
              />
            </div>
            <div className='mb-6'>
              <label
                className='block text-gray-700 text-md font-semibold mb-2'
                htmlFor='message'
              >
                Message
              </label>
              <textarea
                className='w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
                id='message'
                name='message'
                placeholder='Your Message'
                rows='5'
                required
              ></textarea>
            </div>
            <div className='flex items-center justify-center'>
              <button
                className='px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-200'
                type='submit'
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
