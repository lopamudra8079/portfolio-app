import React from 'react'

function Contact() {
  return (
    <div id='Contact' className='bg-[#001347] bg-opacity-30 shadow-xl rounded-lg mx-0 md:mx-20 p-8 md:p-12 text-white my-10'>
      <div className='mb-6'>
        <h2 className='text-2xl font-bold pb-7 cursor-pointer hover:text-cyan-300 md:text-4xl'>Contact</h2>
        <p className='text-2xl md:text-xl'>Feel Free To reach out!</p>
      </div>
      <div>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="p-2 rounded
            border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" placeholder="Your Email" className="p-2 rounded
            border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea placeholder="Your Message" className="p-2 rounded
            border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4"></textarea>
          <button type="submit" className="bg-blue-500 text-white p-3 w-fit mx-auto
            rounded hover:bg-blue-600 transition duration-100">Send Message</button>
        </form>
      </div>
              <footer className="text-center text-white py-7 my-4">
          <p>&copy; {new Date().getFullYear()} Lopamudra Sahoo. All rights reserved.</p>
        </footer>
    </div>
  )
}

export default Contact

