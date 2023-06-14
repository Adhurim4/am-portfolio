import React from 'react'
import { useTranslation } from "react-i18next";
 
const About = () => {
    
    const { t } = useTranslation();

  return (   
        <div name="about" className='w-full h-screen mainText2 text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[500px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8'>
                        <p className='sm:text-4xl 2xl font-bold inline border-b-4 border-pink-600'>
                            {t("about")}
                        </p>
                    </div>
                    <div></div>
                    </div>
                    <div className='max-w-[800px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                        <div className='sm:text-right sm:text-4xl 2xl font-bold'>
                            <p>{t("I'm a frontend developer based in Kosovo")}</p>
                            <p>{t("Nice to meet you! Please take a look around.")}</p> 
                        </div>
                        <div>
                            <p className='mainText2'>As a junior frontend developer, I have worked on diverse projects for several companies, gaining valuable experience and refining my programming skills. I am passionate about coding and thrive on challenges, constantly seeking to expand my knowledge and stay up-to-date with the latest industry trends. I am excited to contribute my enthusiasm, creativity, and dedication to new projects and collaborate with experienced professionals in the field.</p>
                        </div>
                    </div>
                
            </div>
        </div>
  )
}

export default About