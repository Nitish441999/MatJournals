import React from 'react';

const data = [
    {   
        imageURL: 'https://via.placeholder.com/400', // Replace with actual image URLs
        titel: 'Project One',
        description: "Description of Project One",
        Feature1: 'Feature 1.1',
        Feature2: 'Feature 1.2',
        Feature3: 'Feature 1.3',
    },
    {   
        imageURL: 'https://via.placeholder.com/400', // Replace with actual image URLs
        titel: 'Project Two',
        description: "Description of Project Two",
        Feature1: 'Feature 2.1',
        Feature2: 'Feature 2.2',
        Feature3: 'Feature 2.3',
    },
    {   
        imageURL: 'https://via.placeholder.com/400', // Replace with actual image URLs
        titel: 'Project Three',
        description: "Description of Project Three",
        Feature1: 'Feature 3.1',
        Feature2: 'Feature 3.2',
        Feature3: 'Feature 3.3',
    }
]

function Project() {
  return (
    <div className='min-h-screen bg-gray-100 p-8'>
      {data.map((item, index) => (
        <div key={index} className='w-full max-w-6xl mx-auto mb-12 p-8 bg-white rounded-lg shadow-lg'>
          <div className='flex flex-col md:flex-row gap-10'>
            {/* Left Side - Image */}
            <div className='w-full md:w-1/2 h-96 rounded-lg overflow-hidden'>
              <img
                className='w-full h-full object-cover'
                src={item.imageURL}
                alt={`Project ${index + 1}`}
              />
            </div>
            
            {/* Right Side - Project Info */}
            <div className='w-full md:w-1/2 flex flex-col justify-center'>
              <h2 className='text-3xl font-bold mb-4'>{item.titel}</h2>
              <p className='text-md font-light mb-4'>
                {item.description}
              </p>
              <ul className='list-disc pl-5'>
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
