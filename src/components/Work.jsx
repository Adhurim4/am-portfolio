import React from 'react'
import Crypto from '../assets/cryptoapp.png'
import MUI from '../assets/MaterialUI.png'
import Youtube from '../assets/YtClone.png'
import RealEstate from '../assets/realEstate.png'
import Movie from '../assets/movie.png'
import NextBlog from '../assets/next_blog.PNG'
import BankFigma from '../assets/bank_figma.PNG'
import ReduxCrud from '../assets/reduxcrud.PNG'

const Work = () => {
  return (
    <div name="work" className='w-full h-screen sm:mt-[400px] mt-[1200px]  text-gray-300  '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl mainText2 font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6 mainText2'>Check out some of my recent work</p>
            </div>


            <div className='w-full p-4 mx-aut  grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div style={{backgroundImage: `url(${NextBlog})`}}
                className='card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-100'>
                      
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            NextJS Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href='https://nextblogpost.vercel.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${ReduxCrud})`}}
                className='card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-100'>
                      
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Redux Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${BankFigma})`}}
                className='card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-100'>
                      
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Bank Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href='https://bank-figma.netlify.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Crypto})`}}
                className='card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-100'>
                      
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Crypto Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href='https://news-crypto.netlify.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href='https://github.com/Adhurim4/crypto_app'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${MUI})`}}
                className='card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-100'>
                      
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Material UI Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href='https://social-media-material-ui.netlify.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href='https://github.com/Adhurim4/material-ui'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Youtube})`}}
                className='card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-100'>
                      
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            YT Clone Application
                        </span>

                        <div className='pt-8 text-center'>
                            {/* <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a> */}
                            <a href='https://github.com/Adhurim4/youtube_clone'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${RealEstate})`}}
                className='card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-100'>
                      
                        <span className='text-2xl font-bold text-white tracking-wider'>
                           Real Estate Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href='https://realestate-kosova.netlify.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href='https://github.com/Adhurim4/real-estate-starter'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Movie})`}}
                className='card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-100'>
                      
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Movie Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href='https://react-moviie-search.netlify.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href='https://github.com/Adhurim4/movie_app'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Work