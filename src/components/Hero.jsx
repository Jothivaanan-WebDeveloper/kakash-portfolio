import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { CiLinkedin } from 'react-icons/ci'
import ProfilePic from '../assets/KakashiTM7.png';
import { DiCss3, DiHtml5, DiJavascript, DiJavascript1, DiReact } from 'react-icons/di';
import LightEffect from './Helpers/LightEffect';
import { BsFire, BsLightningChargeFill } from 'react-icons/bs';
import { GiPaperWindmill, GiWaterDrop } from 'react-icons/gi';
import { SiGoogleearth } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';
// import {ShinnyEffect} from './ShinnyEffect';

const Hero = () => {
    return (
        <>
            <section className='relative mx-auto max-w-[1300px] mt-[8rem] md:mt-[6rem] lg:mt-[3rem] text-gray-200 min-h-screen overflow-hidden lg:mb-1 ' id='hero'>

                <div className='grid md:grid-cols-2 place-items-center gap-8 md:p-10 xl:mt-12'>
                    <motion.div
                    >
                        <motion.p
                            className='flex flex-col gap-1 text-xl md:text-4xl text-gray-300'
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                        >
                            <span className='font-semibold'>Hey, I'm</span>
                            <span className='text-purple-500 font-semibold mt-4 mb-2 text-5xl'>Kakashi Hatake</span>
                        </motion.p>

                        <motion.p
                            className=' max-w-[300px] md:max-w-[700px] leading-3 mt-4 mb-4'
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                        >
                            <TypeAnimation
                                sequence={[
                                    "I am Kakashi Hatake, the Copy Ninja. With mastery of a thousand jutsus and as a former Anbu captain, I lead Team 7 with strategic expertise and experience.",
                                ]}
                                wrapper="span"
                                cursor={true}
                                speed={60}
                                className='text-sm md:text-base text-gray-400 font-medium tracking-wider'
                            />

                        </motion.p>

                        <div className='flex items-center gap-2 justify-between'>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 0.2 }}

                                className='flex gap-4 items-center text-purple-400 mt-4 text-base md:text-3xl'>
                                <motion.a
                                    href='#'
                                    whileHover={{ scale: 1.2 }}
                                >
                                    <FaFacebook />
                                </motion.a>
                                <motion.a
                                    href='#'
                                    whileHover={{ scale: 1.2 }}
                                >
                                    <FaTwitter />
                                </motion.a>
                                <motion.a
                                    href='#'
                                    whileHover={{ scale: 1.2 }}
                                >
                                    <FaInstagram />
                                </motion.a>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.img
                        src={ProfilePic}
                        className='mt-8 md:mt-0 w-[300px] md:w-[550px]'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                    </motion.img>
                </div>

                <div className='mt-4 lg:mt-0'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className='text-lg md:text-4xl flex justify-center items-center p-4 gap-4 flex-wrap'
                    >
                        <p className='text-gray-400 text-xs md:text-lg font-medium tracking-widest'>Known Styles :</p>
                        <BsLightningChargeFill className='text-purple-400 animate-pulse ease-out duration-300' />
                        <BsFire className='text-yellow-600 animate-pulse ease-out duration-300' />
                        <GiWaterDrop className='text-blue-500 animate-pulse ease-out duration-300' />
                        <SiGoogleearth className='text-green-500 animate-pulse ease-out duration-300' />
                        <GiPaperWindmill className='text-gray-500 animate-pulse ease-out duration-300' />
                    </motion.div>
                </div>

                {/* <div
                    className='absolute inset-0 hidden md:block'
                >
                    <LightEffect top={0} left={0} size={1000} />
                </div> */}

            </section>
        </>
    )
}

export default Hero