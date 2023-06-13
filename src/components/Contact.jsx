import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { handleSubmit, register, formState: { errors }, reset } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://getform.io/f/ac719518-5117-45bb-bbc1-5b5352e60a0f', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
      } else {
        console.log('Failed to submit form');
      }
    } catch (error) {
      console.log('An error occurred while submitting the form:', error);
    }
  };

  return (
    <div name="contact" className='w-full h-screen sm:mt-[400px] mt-[1200px] flex justify-center items-center p-4'>
      <form className='flex flex-col max-w-[700px] w-full' onSubmit={handleSubmit(onSubmit)}>
        <div className='pb-8'>
          <p className='mainText2 text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
            Contact
          </p>
          <p className='mainText2 text-gray-300 py-4'>Submit the form below or shot me an email - adhuriim.muqiqi@gmail.com</p>
        </div>

        <input
          className='mainBg bg-[#ccd6f6] p-2'
          type="text"
          placeholder='Name'
          {...register('name', { required: true })}
        />
        {errors.name && <p className="text-red-500">This field is required</p>}

        <input
          className='mainBg my-4 p-2 bg-[#ccd6f6]'
          type="email"
          placeholder='Email'
          {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
        />
        {errors.email && <p className="text-red-500">Invalid email format</p>}

        <textarea
          className='mainBg bg-[#ccd6f6] p-2'
          name='message'
          rows="10"
          placeholder='Message'
          {...register('message', { required: true, minLength: 3 })}
        />
        {errors.message && <p className="text-red-500">Message must be at least 3 characters long</p>}

        {isSubmitted && <p className="text-green-500">Message sent successfully!</p>}

        <button className='mainBg text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center' type="submit">Let's Collaborate</button>
      </form>
    </div>
  );
};

export default Contact;
