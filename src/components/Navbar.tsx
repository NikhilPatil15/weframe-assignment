'use client'

import { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import { CiSearch } from "react-icons/ci";
import { SlBulb, SlHeart } from "react-icons/sl";
import { FiShoppingCart } from "react-icons/fi";
import { IoChevronDownOutline } from "react-icons/io5";


const Navbar = () => {
  const menuItems = [
    "ART DE LA TABLE",
    "MOBILIER",
    "NAPPAGE",
    "MATÉRIEL DE SALLE",
    "CUISINE",
    "BARBECUE",
    "TENTE",
    "CHAUFFAGE",
    "PODIUM - PISTE DE DANSE",
    "SON ET LUMIÈRE",
    "PACKS",
    "CONSOMMABLES",
  ];

  const [selectedItem, setSelectedItem] = useState(0);

  
  

  return (
    <header className="w-full bg-white ">
      <div className="m-8 flex justify-between items-start">
        {/* Logo */}
        <div className="flex  gap-4">
          <a className="flex items-center">
            <Image src={logo} alt="weframetech logo" />
          </a>
        {/* Search bar */}
        <div className="w-[768px] h-[50px] rounded-md flex items-center justify-between px-4 bg-[#f9fafb] focus-within:border font-geist">
          <input
            type="text"
            placeholder="Rechercher un produit"
            className="flex-1 bg-transparent   outline-none text-gray-600"
          />

          <CiSearch className="text-[24px] text-gray-400 cursor-pointer" />
        </div>
        </div>


        {/* Right section */}
        <div className="flex items-center space-x-4 text-[14px] font-poppins">
          <button className="text-black p-2 flex items-center gap-[8px] ">
            <SlBulb className="text-[#282f35]"/>
            Inspirations
          </button>
          <button className="flex items-center text-black gap-2">
            <SlHeart className="text-[#8f9ba0]"/>
            <span className="mr-2">Mes favoris</span>
            <span className="text-xs bg-[#d4d5d5]  text-[#242d30] rounded-full px-2 py-0.5">
              24
            </span>
          </button>
          <button className="flex items-center  text-white bg-[#0093d0] py-[10px] px-[16px] rounded-[6px]">
            <FiShoppingCart/>
            <span className="ml-2">Panier</span>
          </button>
          <div className="flex items-center gap-2 ">
            <span className="w-[44px] h-[44px]  bg-gray-300 rounded-full" />
        
            <button className="text-black font-montserrat">FR</button>
            <IoChevronDownOutline/>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="">
      <ul className={`flex justify-evenly space-x-4 border-b font-inter`}>
        {menuItems.map((item, index) => (
          <li key={index} className="relative" >
            <div
              onClick={() => setSelectedItem(index)}
              className={`cursor-pointer text-sm font-medium ${
                selectedItem === index
                  ? "text-[#0093d0] border-b-2 border-[#0093d0]"
                  : "text-gray-500"
              } pb-3 font-bold leading-[21px] text-[14px] tracking-wide`}
            >  
              {item}
            </div>
          </li>
        ))}
      </ul>
    </nav>
    </header>
  );
};

export default Navbar;
