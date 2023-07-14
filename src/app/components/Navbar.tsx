'use client';

import React, { useState, useEffect, useRef } from 'react'

// import {TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon, DribbbleIcon, SunIcon, MoonIcon } from './Icons'
import {motion} from "framer-motion"
import { CustomLink } from './Links/CustomLink';
import CustomMobileLink from './Links/CustomMobileLink';
import useOnClickOutsideSSR from "use-onclickoutside-ssr";
import Title from './Texts/Title';
import '../style/logo.css'


const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);


    const ref = useRef<HTMLDivElement>(null);
    const toggleButton = useRef<HTMLButtonElement>(null);
    
    useOnClickOutsideSSR(ref, () => {
        if (isOpen && ref.current && !ref.current.contains(event.target as Node) && toggleButton.current && !toggleButton.current.contains(event.target as Node)) {
            handleClick();
          }
    });

    const handleClick = () => {
        setIsOpen(!isOpen)
    }



  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between
    dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>


        <button 
        className='flex-col justify-center items-center hidden lg:flex '
        onClick={handleClick}
        ref={toggleButton}
        >
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-0.5'}`}></span>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${isOpen ? '-rotate-45 -translate-y-2' : 'translate-y-0.5'}`}></span>
        </button>

        
        <div>
 
            <h1 className='font-akaya flex justify-center items-center
            '>
                {/* <span>- </span> */}
                <span className='!text-4xl font-extrabold text-primaryDark dark:text-primary'>T </span>
                {/* <span>-</span> */}
            </h1>
        </div>

        {/* NavBar Desktop */}
        <div className='flex justify-between items-center lg:hidden'>
            <nav>
                <CustomLink href="/" title="Home" className='mr-4' />
                <CustomLink href="/about2" title="Pricing" className='mx-4'/>
                <CustomLink href="/about2" title="Contact" className='mx-4'/>
                <CustomLink href="/articles" title="Connect" className='ml-4'/>
            </nav>
        </div>

        {/* NavBar Mobile */}
        {
            isOpen ?
            <motion.div 
            ref={ref}
            initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
            animate={{scale:1, opacity:1}}
            className='min-w-[70vw] z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'>
                <nav className='flex items-center flex-col justify-center'>
                    <CustomMobileLink href="/" title="Home" className='' toggle={handleClick} setIsOpen={setIsOpen}/>
                    <CustomMobileLink href="/about2" title="About" className=''toggle={handleClick}/>
                    <CustomMobileLink href="/projects" title="Projects" className=''toggle={handleClick}/>
                    <CustomMobileLink href="/articles" title="Articles" className=''toggle={handleClick}/>
                </nav>
            </motion.div> 
            : null
        }


    </header>
  )
}

export default NavBar