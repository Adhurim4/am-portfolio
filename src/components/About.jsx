import React from 'react'
import { useTranslation } from "react-i18next";
 
const About = () => {
    
    const { t } = useTranslation();

  return (   
        <div name="about" className='w-full h-screen mainText2 text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            {t("about")}
                        </p>
                    </div>
                    <div></div>
                    </div>
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                        <div className='sm:text-right text-5xl font-bold'>
                            <p>{t("Hi. I'm Adhurim, nice to meet you. Please take a look around.")}</p>
                        </div>
                        <div>
                            <p className='mainText2'> I enjoy breaking down complex projects into smaller components and finding elegant solutions to problems.
                                 I always aim to create clean and maintainable code that delivers the best user experience possible. React's modular architecture 
                                and separation of concerns make it a joy to work with and one of the most exciting tools available to web developers today.</p>
                        </div>
                    </div>
                
            </div>
        </div>
  )
}

export default About