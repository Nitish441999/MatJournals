import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  {   
    imageURL: 'https://i.imgur.com/4yuygdz.png', 
    title: 'E-Bhart Ecommerce Website',
    description: "E-Bharat is a dynamic e-commerce website designed for the Indian market, built with advance web technologies. Utilizing React and Vite for a fast, responsive front-end, it offers a seamless user experience. JavaScript powers the interactivity, while Firebase serves as the backend, providing real-time data synchronization and secure user authentication. E-Bharat enables users to explore a wide range of products with ease, offering robust performance and scalability. Whether you're shopping for essentials or unique finds, E-Bharat delivers a smooth, reliable platform optimized for modern web browsing.",
    Feature1: 'React, Vite',
    Feature2: 'JavaScript',
    Feature3: 'Firebase',
    gitlink: 'https://github.com/Nitish441999/E-Bharat',
    link: 'https://ebhartwebsite.netlify.app'
  },
  {   
    imageURL: 'https://i.imgur.com/8eRf8IE.png', 
    title: 'Furniro Ecommerce Website',
    description: "Furniro is an advanced home decoration e-commerce website designed for modern users seeking stylish and functional décor. Built with React and Vite, the platform ensures a fast and dynamic user experience, while JavaScript powers interactive elements. The backend is seamlessly managed using Firebase, providing robust data management and real-time capabilities. With an intuitive interface and responsive design, Furniro makes it easy to explore and purchase premium home decoration items. Whether you're looking to refresh your living space or find the perfect accessory, Furniro offers a sleek, efficient, and enjoyable shopping experience.",
    Feature1: 'React, Vite',
    Feature2: 'JavaScript',
    Feature3: 'Firebase',
    gitlink: 'https://github.com/Nitish441999/Furniture',
    link: 'https://quiet-travesseiro-fd4fca.netlify.app'
  },
  {   
    imageURL: 'https://i.imgur.com/Uv1VK7E.png', 
    title: 'Greats Ecommerce Website',
    description: "Greats Only, your premier e-commerce destination for stylish shoes. Powered by React, Vite, and JavaScript, our website offers a seamless shopping experience with fast load times and interactive features. Browse our curated collection of high-quality footwear, enjoy smooth navigation, and stay updated with the latest trends. Whether you're searching for trendy sneakers or elegant dress shoes, Greats Only provides a user-friendly interface and exceptional performance to make your shopping experience enjoyable and efficient.",
    Feature1: 'React, Vite',
    Feature2: 'JavaScript',
    Feature3: 'Tailwind CSS',
    gitlink: 'https://github.com/Nitish441999/Creats',
    link: 'https://greatswebsite.netlify.app'
  }
];

function Project() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='min-h-screen bg-gray-100 p-8'>
      {data.map((item, index) => (
        <div key={index} className='w-full max-w-7xl mx-auto mb-12 p-8 bg-white rounded-lg shadow-sm'>
          <div className='flex flex-col md:flex-row gap-10'>
            {/* Left Side - Image */}
            <div className='w-full md:w-1/2 h-96 rounded-lg overflow-hidden' data-aos="fade-right" data-aos-duration="1700">
              <a href={item.link} target='_blank' rel='noopener noreferrer'>
                <img
                  className='w-full h-full bg-cover'
                  src={item.imageURL}
                  alt={`Project ${index + 1}`}
                />
              </a>
            </div>
            
            {/* Right Side - Project Info */}
            <div className='w-full md:w-1/2 flex flex-col justify-center' data-aos="fade-left" data-aos-duration="1700">
              <a href={item.gitlink} target='_blank' rel='noopener noreferrer'>
                <h2 className='text-3xl font-bold mb-4 text-rose-500 hover:underline hover:text-red-400'>
                  {item.title}
                </h2>
              </a>
              <p className='text-md font-light mb-4 first-letter:text-2xl first-letter:font-bold first-letter:text-rose-500'>
                {item.description}
              </p>
              <ul className='list-disc pl-5 flex gap-10'>
                <li>{item.Feature1}</li>
                <li>{item.Feature2}</li>
                <li>{item.Feature3}</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
