import React, { useEffect, useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from 'emailjs-com'; // Import emailjs


function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_fk5b9ju",
        "template_mcqx1mk",
        e.target,
        "6XPyJB28ODIzSnuiC"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccess(true);
          setIsSending(false);
          
          // Hide the success message after 2 seconds
          setTimeout(() => setIsSuccess(false), 2000);
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message. Please try again later.");
          setIsSending(false);
        }
      );

    e.target.reset();
  };

  // Reset success state on input change
  const handleInputChange = () => {
    if (isSuccess) setIsSuccess(false);
  };

  return (
    <div className=' flex justify-center items-center bg-gray-100'>
      <div className='flex flex-wrap max-w-6xl w-full bg-white p-10 rounded-lg shadow-sm'>
        {/* Contact Details */}
        <div className='w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 flex flex-col' data-aos="fade-right" data-aos-duration="1700">
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
              <p className='text-md text-gray-500'>New B47 B-Block New Ashok Nagar,<br/>New Delhi, India</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className='w-full md:w-1/2 flex flex-col' data-aos="fade-left" data-aos-duration="1700">
          <h2 className='text-3xl font-bold text-gray-800 mb-6'>Send a Message</h2>
          <form onSubmit={sendEmail}>
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className='flex items-center justify-center'>
              <button
                className={`px-8 py-3 bg-rose-500 text-white font-semibold rounded-lg hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-200 ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
                type='submit'
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            {isSuccess && (
              <p className="text-green-500 text-center mt-4">Message sent successfully!</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
