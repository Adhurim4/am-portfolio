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
          {t("I'm a Software Developer.")}
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] mainText2">
        {t("I am a software developer focused on front-end technologies like React JS. I build user-friendly and efficient applications with a strong emphasis on performance and scalability. My experience in back-end development helps me create seamless, integrated solutions. I pride myself on writing clean code and staying up-to-date with the latest industry trends. My passion for innovation and continuous learning keeps me at the forefront of emerging technologies, allowing me to deliver high-performance applications.")}
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center mainText3 hover:bg-pink-600 hover:border-pink-600"
          onClick={() => {
            window.location.href = "https://github.com/Adhurim4";
            }}>
            {t("View Work")}     
            <HiArrowNarrowRight className="ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;