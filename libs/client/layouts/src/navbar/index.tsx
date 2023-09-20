import { link } from 'fs';
import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
export const Navbar = () => {
  const [isToggle, setIsToggle] = React.useState<boolean>(false);

  const navLinks = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'portfolio'
    },
    {
      id: 4,
      link: 'experience'
    },
    {
      id: 5,
      link: 'contact'
    }
  ];
  return (
    <div className="flex items-center justify-between bg-black fixed text-white px-4 w-full h-20">
      <div>
        <h1 className="font-signature text-5xl ml-2">Saroj Ghalan</h1>
      </div>
      <ul className="hidden md:flex ">
        {navLinks.map((item) => (
          <li
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            key={item.id}
          >
            {item.link}
          </li>
        ))}
      </ul>
      <div
        onClick={() => setIsToggle(!isToggle)}
        className="text-gray-500 z-50 pr-5 cursor-pointer md:hidden"
      >
        {isToggle ? <FaTimes size={30} /> : <FaBars size={30} />}
        {isToggle && (
          <ul className="absolute top-0 left-0 bg-gradient-to-b from-black to-gray-800 flex flex-col h-screen w-full items-center justify-center text-gray-500 ">
            {navLinks.map((item) => (
              <li
                className="px-4 py-6 cursor-pointer capitalize text-2xl text-gray-500"
                key={item.id}
              >
                {item.link}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
