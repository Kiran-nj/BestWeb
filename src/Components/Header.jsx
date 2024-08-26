import React, { useState } from 'react';
import { GiReactor } from "react-icons/gi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import ToggleButton from './ToggleButton';
import { TiStarburst } from "react-icons/ti";
import '../Components/animate.css'; // Make sure this path is correct
import DropDown from './DropDown';

const Header = () => {
    const [rotate, setRotate] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false); // State to show/hide dropdown

    const handleToggleClick = () => {
        setRotate(true);
        setShowDropdown(!showDropdown); // Toggle dropdown visibility
        setTimeout(() => setRotate(false), 600); // Reset after animation duration
    };

    return (
        <div className='mx-10 my-1 md:my-5 fixed top-1 md:top-14 left-0 right-0 z-10'>
            <div className='flex justify-between items-center'>
                {/* icon */}
                <h1 className='text-7xl text-[#3B0017] z-40'><GiReactor /></h1>
                <div className='flex gap-4 items-center'>
                    <h1 className='text-5xl z-40'><HiOutlineShoppingBag /></h1>
                    {/* toggle button */}
                    <div className="relative group flex">
                        {/* Apply animation to TiStarburst when hovering over the parent div */}
                        <TiStarburst className={`text-[#3B0017] text-9xl transition-transform duration-100 ${rotate ? 'rotate-360' : ''}`} />
                        <span className='absolute top-11 right-11 z-40'>
                            <ToggleButton onClick={handleToggleClick} className="text-5xl z-50" />
                        </span>
                    </div>
                </div>
            </div>
            <div className={`transition-transform duration-500 ease-in-out ${showDropdown ? 'top-0 ' : 'bottom-0 '} fixed left-0 right-0 z-40`}>
                <DropDown />
            </div>
        </div>
    );
}

export default Header;
