import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    }

    const closeNav = () => {
        setNav(false);
    }

    const menuVariants = {
        open: { transition: { stiffness: 20, damping: 15 }, x: 0 },
        close: { transition: { stiffness: 20, damping: 15 }, x: '-100%' }
    }

    return (
        <>
            <section className='fixed top-0 left-0 w-full z-50 bg-opacity-70 backdrop-blur-md navbar-background'>
                <div className='flex justify-between items-center mx-auto max-w-[1300px] text-gray-200 px-12 h-20'>
                    <div>
                        <Link href='hero' to='hero' smooth={true} duration={800} offset={-200}>
                            <a href='#' className='font-bold text-base md:text-2xl capitalize'>Copy Ninja</a>
                        </Link>
                    </div>
                    <div>
                        <ul className='hidden gap-12 md:flex z-10 cursor-pointer font-semibold'>
                            <li>
                                <Link href='skills' to='skills' smooth={true} duration={800} offset={-500}>
                                    <span className='navbar-items'>Skills</span>
                                </Link>
                            </li>
                            <li>
                                <Link href='journey' to='journey' smooth={true} duration={800} offset={-200}>
                                    <span className='navbar-items'>Journey</span>
                                </Link>
                            </li>
                            <li>
                                <Link href='trivia' to='trivia' smooth={true} duration={800} offset={-150}>
                                    <span className='navbar-items'>Trivia</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='z-50 md:hidden text-gray-200' onClick={toggleNav}>
                        {
                            nav ? <AiOutlineClose /> : <AiOutlineMenu />
                        }
                    </div>
                    <motion.div
                        initial={false}
                        animate={nav ? 'open' : 'close'}
                        variants={menuVariants}
                        className='z-40 fixed top-0 right-0 w-full min-h-screen bg-gray-800'
                    >
                        <ul className='mt-24 font-semibold text-xl flex flex-col justify-center items-center space-y-4 text-gray-200'>
                            <li onClick={closeNav}>
                                <Link onClick={closeNav} href='skills' to='skills' smooth={true} duration={800} offset={-500}>
                                    <span className='navbar-items'>Skills</span>
                                </Link>
                            </li>
                            <li onClick={closeNav}>
                                <Link onClick={closeNav} href='journey' to='journey' smooth={true} duration={800} offset={-200}>
                                    <span className='navbar-items'>Journey</span>
                                </Link>
                            </li>
                            <li onClick={closeNav}>
                                <Link onClick={closeNav} href='trivia' to='trivia' smooth={true} duration={800} offset={-150}>
                                    <span className='navbar-items'>Trivia</span>
                                </Link>
                            </li>
                        </ul>
                    </motion.div>

                </div>
            </section>
        </>
    )
}

export default Navbar