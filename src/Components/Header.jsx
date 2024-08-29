import React, { useState, useEffect } from 'react';
import { GiReactor } from "react-icons/gi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import ToggleButton from './ToggleButton';
import { TiStarburst } from "react-icons/ti";
import '../Components/animate.css'; // Make sure this path is correct
import DropDown from './DropDown';

const Header = () => {
    const [rotate, setRotate] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [iconColor, setIconColor] = useState('#3B0017'); // Default color

    const handleToggleClick = () => {
        console.log('Toggle clicked'); // Debugging
        setRotate(true);
        setShowDropdown(!showDropdown);
        setTimeout(() => setRotate(false), 600);
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
    
        // Change color based on scroll position
        if (scrollPosition > 400 && scrollPosition <= 900) {
            setIconColor('#000000'); // orange color
        } else if (scrollPosition > 900 && scrollPosition <= 1300) {
            setIconColor('#97C43E'); // lightpink color
        } else if (scrollPosition > 1300 && scrollPosition <= 3100) {
            setIconColor('#3B0017'); // brown color
        } else if (scrollPosition > 3100 && scrollPosition <= 3900) {
            setIconColor('#97C43E'); // [pink] color
        }
        else if (scrollPosition > 4500 && scrollPosition <= 6000) {
           setIconColor(' #732690'); // [pink] color
        } else {
            setIconColor('#3B0017'); // Default color (e.g., black) when scroll is less than 100
        }
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='mx-10 my-1 md:my-5 fixed top-1 md:top-14 left-0 right-0 z-50'>
            <div className='flex justify-between items-center'>
                {/* icon */}
                <h1 className='text-7xl transition-colors duration-500 ease-in-out ' style={{ color: iconColor }}><GiReactor /></h1>
                <div className='flex gap-4 items-center'>
                    <h1 className='text-5xl z-40 transition-colors duration-500 ease-in-out' style={{ color: iconColor }}><HiOutlineShoppingBag /></h1>
                    {/* toggle button */}
                    <div className="relative group flex">
                        {/* Apply animation to TiStarburst when hovering over the parent div */}
                        <TiStarburst className={`text-8xl transition-colors duration-100 ${rotate ? 'rotate-360' : ''}  duration-500 ease-in-out`} style={{ color: iconColor }} />
                        <span className='absolute top-[33px] right-[34px] z-40'>
                            <ToggleButton onClick={handleToggleClick} className="text-2xl z-50" />
                        </span>
                    </div>
                </div>
            </div>
            {console.log(showDropdown)}
            {showDropdown && (
                <div className={`fixed top-0 left-0 right-0 z-40`}> {/* Increased z-index */}
                    <DropDown />
                </div>
            )}
        </div>
    );
}

export default Header;
