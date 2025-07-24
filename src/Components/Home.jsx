import React from 'react';
import avatarImg from '../assets/home-img.webp';

function Home() {
  
  return (
    <div className='text-white flex flex-col md:flex-row justify-between items-start p-10 md:p-20 bg-[#001347] bg-opacity-30 shadow-xl mx-0 md:mx-20 rounded-lg my-10'>
      
      {/* Text Section */}
      <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3xl md:text-6xl font-bold leading-normal tracking-tighter mb-4'>
          Hello I'm Lopamudra...
        </h1>
        <p className='text-sm md:text-xl tracking-wide mb-6 capitalize'>
          I am from Puri. Persuing my MCA from GIET Khorda,Baniatangi.I'm an aspiring Full-stack Developer with a passion for creating dynamic and responsive web applications. Currently, I am focusing on the MERN stack (MongoDB, Express.js, React.js, Node.js) to build robust and scalable applications.
        </p>
        <button className='mt-2 text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
          Contact Me
        </button>
      </div>

      {/* Image Section */}
      <div className='w-full md:w-2/5 mt-10 md:mt-0 flex justify-center md:justify-end'>
        <img src={avatarImg} alt="Avatar" className='w-full h-auto max-w-xs object-contain shadow-md' />
      </div>
    </div>
  )
}

export default Home;
