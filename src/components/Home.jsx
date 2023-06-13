import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div name="home" className="w-full h-screen justify-center items-center">
      {/* Container */}
      <div className="max-w-[900px]  p-4 flex flex-col justify-center h-full mx-auto">
        <p className="text-pink-600 mainText">{t('Hi, my name is')}</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6] mainText2">
          Adhurim Muqiqi
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0]">
          {t("I'm a Frontend Developer.")}
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] mainText2">
        {t("As a junior frontend developer, I have experience in building user interfaces for web applications using React. I have a strong understanding of creating single-page applications, web components, and efficiently manipulating the Document Object Model (DOM). Additionally, I am proficient in collaborating with senior developers, writing clean and organized code, and troubleshooting issues to deliver high-quality results.")}
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center mainText3 hover:bg-pink-600 hover:border-pink-600">
          onClick={() => {
            window.location.href = "https://github.com/Adhurim4";
            }}
            {t("View Work")} 
            <HiArrowNarrowRight className="ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;