import Link from "next/link";
import React from "react";
import { AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
    const[nav,setNav] = useState(false);
   
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className="fixed left-0 top-10 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 className="font-bold text-4xl">MeloAlchemy</h1>
        </Link>
        <ul className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/gallery">Gallery</Link>
          </li>
          <li className="p-4">
            <Link href="/works">Works</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        {/* Mobile button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/* Mobile menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 bottom-0 left-0 right-0 flex justify-center text-center items-center w-full h-screen bg-black ease-in duration-300"
              : "sm:hidden absolute top-0 bottom-0 left-[-100%] right-0 flex justify-center text-center items-center w-full h-screen bg-black ease-in duration-300"
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/gallery">Gallery</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/works">Works</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
