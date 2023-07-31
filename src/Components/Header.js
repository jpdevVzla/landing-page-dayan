import React from 'react';
import { Link } from 'react-scroll';
import { AiFillHome, AiOutlineInfoCircle, AiFillContacts } from 'react-icons/ai';


const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-indigo-500 p-10">
      <div className="flex justify-between items-center"> 
        <nav className="flex space-x-28">
          <Link
            activeClass="font-bold"
            to="section1"
            spy={true}
            smooth={true}
            duration={500}
            className="flex items-center text-white hover:text-indigo-200 cursor-pointer"
          >
            <AiFillHome className="text-xl mr-2" />
            Inicio
          </Link>
          <Link
            activeClass="font-bold"
            to="section2"
            spy={true}
            smooth={true}
            duration={500}
            className="flex items-center text-white hover:text-indigo-200 cursor-pointer"
          >
            <AiOutlineInfoCircle className="text-xl mr-2" />
            Acerca
          </Link>
          <Link
            activeClass="font-bold"
            to="section3"
            spy={true}
            smooth={true}
            duration={500}
            className="flex items-center text-white hover:text-indigo-200 cursor-pointer"
          >
            <AiFillContacts className="text-xl mr-2" />
            Contacto
          </Link>
        </nav>
        <div className="text-white text-xl font-bold" style={{ fontFamily: 'sans-serif' }}>Dayan Rodriguez</div> 
      </div>
    </header>
  );
};

export default Header;
