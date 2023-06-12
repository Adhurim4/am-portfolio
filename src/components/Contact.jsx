import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen sm:mt-[400px] mt-[1200px] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/ac719518-5117-45bb-bbc1-5b5352e60a0f' className='flex flex-col max-w-[700px] w-full'>
            <div className='pb-8'>
                <p className='mainText2 text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
                    Contact
                </p>
                <p className='mainText2 text-gray-300 py-4'>Submit the form below or shot me an email - adhuriim.muqiqi@gmail.com</p>
                </div>

                <input  className='mainBg bg-[#ccd6f6] p-2' type="text" placeholder='Name' name="name"/>
                <input className='mainBg my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name="email"/>
                <textarea className='mainBg bg-[#ccd6f6] p-2' name='message' rows="10" placeholder='message'></textarea>
                <button className='mainBg text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact