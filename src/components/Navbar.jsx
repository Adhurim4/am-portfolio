import React, { useState} from 'react'
import LogoA from '../assets/a.png';
import LogoM from '../assets/m.png';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll';
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    const { t, i18n } = useTranslation();
  
    const handleLanguageChange = lng => {
      i18n.changeLanguage(lng);
    };

  return (
    
    <div className='fixed bg-[#0a192f] w-full mainText  h-[80px] flex justify-between
     items-center px-4   text-gray-400 text-xl font-bold'>
        
        <div className='flex'>
        <img src={LogoA} alt="logo image" style={{width:'40px',  paddingRight:"6px" }} />
            <img src={LogoM} alt="logo image" style={{width:'40px' }} />
        </div>
  
        {/* Menu */}
           
            <ul className='hidden md:flex'>
            <li className="flex">
            <button onClick={() => handleLanguageChange("en")} className="w-1/2 px-2 txt hover:bg-gray-400">
                EN
            </button>
            <div className="w-1/12 border-l-2 border-gray-500"></div>
            <button onClick={() => handleLanguageChange("al")} className="w-1/2 px-2 txt hover:bg-gray-400">
                AL
            </button>
            </li>
            <li className='mainText4 hover:scale-110'>
                <Link  to='home' smooth={true} duration={500}>{t("home")}</Link>
            </li>
            <li className='mainText4 hover:scale-110'>
                <Link  to='about' smooth={true} duration={500}>{t("about")}</Link>
            </li>
            <li className='mainText4 hover:scale-110'>
                <Link  to='skills' smooth={true} duration={500}>{t("skills")}</Link>
            </li>
            <li className='mainText4 hover:scale-110'>
                <Link  to='work' smooth={true} duration={500}>{t("work")}</Link>
            </li>
            <li className='mainText4 hover:scale-110'>
                <Link  to='contact' smooth={true} duration={500}>{t("contact")}</Link>
            </li>
            </ul>
 
        {/* Hamburger Menu */}

        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes /> }
        </div>
        
        {/* Mobile Menu */}

            <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a102f] flex flex-col  justify-center items-center'}>
            <li className="flex">
            <button onClick={() => handleLanguageChange("en")} className="w-1/2 px-2 txt hover:bg-gray-400">
                EN
            </button>
            <div className="w-1/12 border-l-2 border-gray-500"></div>
            <button onClick={() => handleLanguageChange("al")} className="w-1/2 px-2 txt hover:bg-gray-400">
                AL
            </button>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick}   to='home' smooth={true} duration={500}>{t("home")}</Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick}   to='about' smooth={true} duration={500}>{t("about")}</Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick}   to='skills' smooth={true} duration={500}>{t("skills")}</Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick}   to='work' smooth={true} duration={500}>{t("work")}</Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick}    to='contact' smooth={true} duration={500}>{t("contact")}</Link>
            </li>
            </ul>

        {/* Social Icons */}
        
            <div className={!nav ? 'hidden xl:flex fixed flex-col top-[35%] left-0': "flex fixed flex-col top-[38%] left-0"}>
           
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                     href='https://www.linkedin.com/in/adhurim-muqiqi-451009126/'>
                        LinkedIn <FaLinkedin size={30} />
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                     href='https://github.com/Adhurim4'>
                        GitHub <FaGithub size={30} />
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                     href='/'>
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                     href='/'>
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
            </div>
    </div>
  )
}

export default Navbar;