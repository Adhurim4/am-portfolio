import React from 'react'
import Javascript from '../assets/javascript.png';
import Html from '../assets/html.png';
import Css from '../assets/css.png';
import GitHub from '../assets/github.png';
import MaterialUI from '../assets/material-ui-1.svg';
import ReactImg from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen mainText2  text-gray-300'>

        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4 mainText2'>//These are the technologies I've worked with</p>
            </div>
            
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] card hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto img ' src={Html} alt="html icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] card hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto img' src={Css} alt="html icon" />
                    <p className='my-4'>Css</p>
                </div>
                <div className='shadow-md shadow-[#040c16]  card hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto img' src={Javascript} alt="html icon" />
                    <p className='my-4'>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] card hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto img' src={ReactImg} alt="html icon" />
                    <p className='my-4'>React Js</p>
                </div>
                <div className='shadow-md shadow-[#040c16] card hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto img' src={Tailwind} alt="html icon" />
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md card shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto img' src={MaterialUI} alt="html icon" />
                    <p className='my-4'>MaterialUI</p>
                </div>
                <div className='shadow-md shadow-[#040c16] card hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto img' src={GitHub} alt="html icon" />
                    <p className='my-4'>GitHub</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Skills