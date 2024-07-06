import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { CiLinkedin } from 'react-icons/ci'
import ProfilePic from '../assets/KakashiTM7.png';
import { DiCss3, DiHtml5, DiJavascript, DiJavascript1, DiReact } from 'react-icons/di';
import LightEffect from './LightEffect';
import { BsFire, BsLightningChargeFill } from 'react-icons/bs';
import { GiPaperWindmill, GiWaterDrop } from 'react-icons/gi';
import { SiGoogleearth } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';
// import {ShinnyEffect} from './ShinnyEffect';

const Hero = () => {
    return (
        <>
            <section className='relative mx-auto max-w-[1300px] mt-24 text-gray-200 min-h-screen'>

                <div className='grid md:grid-cols-2 place-items-center gap-8 md:p-10'>
                    <motion.div>
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
                                    "I am Kakashi Hatake, also known as the Copy Ninja. With a keen mastery of over a thousand jutsus, I have honed my skills through countless missions and battles. As a leader of Team 7 and a former Anbu captain, I bring unparalleled expertise and strategic thinking to every challenge...",
                                ]}
                                wrapper="span"
                                cursor={true}
                                className='text-sm md:text-base text-gray-400 font-medium tracking-wider'
                            />

                        </motion.p>

                        <div className='flex items-center gap-2 justify-between'>
                            <motion.button
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                className=' tracking-wider text-sm md:text-base mt-4 z-10 cursor-pointer py-2 px-4 text-gray-400 border border-gray-400 rounded-md md:w-auto'
                            >
                                Download CV
                            </motion.button>

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
                                    <FaGithub />
                                </motion.a>
                                <motion.a
                                    href='#'
                                    whileHover={{ scale: 1.2 }}
                                >
                                    <CiLinkedin />
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
                        className='w-[300px] md:w-[550px]'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                    </motion.img>
                </div>

                <div className='mt-4'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 2 }}
                        className='text-lg md:text-4xl flex justify-center items-center p-4 gap-4 flex-wrap'
                    >
                        <p className='text-gray-400 text-xs md:text-lg font-medium tracking-widest'>Known Styles :</p>
                        <BsLightningChargeFill className='text-purple-400' />
                        <BsFire className='text-yellow-600' />
                        <GiWaterDrop className='text-blue-500' />
                        <SiGoogleearth className='text-green-500' />
                        <GiPaperWindmill className='text-gray-500' />
                    </motion.div>
                </div>

                <div
                    className='absolute inset-0 hidden md:block'
                >
                    <LightEffect top={0} left={0} size={1000} />
                </div>

            </section>
        </>
    )
}

export default Hero