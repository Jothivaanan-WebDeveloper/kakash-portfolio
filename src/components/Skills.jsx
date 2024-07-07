import { motion } from 'framer-motion';
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejsSmall, DiPython, DiJava, DiDatabase } from 'react-icons/di';
import { BsFillGearFill } from 'react-icons/bs';
import { FaTools, FaMedal, FaHandRock } from 'react-icons/fa';
import { AiFillThunderbolt } from 'react-icons/ai';
import { LiaBullseyeSolid, LiaGlobeEuropeSolid } from 'react-icons/lia';
import { HiMiniUserGroup } from 'react-icons/hi2';
import { MdEnergySavingsLeaf, MdLocalFireDepartment, MdOutlineSportsMartialArts } from 'react-icons/md';
import { PiEyeFill, PiFlowerLotusFill, PiHurricaneBold } from 'react-icons/pi';
import { GiRunningNinja } from 'react-icons/gi';
import { IoLogoReact } from 'react-icons/io5';
import HeadingHelper from './Helpers/HeadingHelper';

const Skills = () => {
    const skills = [
        {
            category: "Ninjutsu",
            technologies: [
                { name: 'Chidori', icon: <AiFillThunderbolt className='text-blue-500' /> },
                { name: 'Shadow Clone', icon: <HiMiniUserGroup className='text-gray-500' /> },
                { name: 'Fire Style', icon: <MdLocalFireDepartment className='text-yellow-500' /> },
                { name: 'Rasengan', icon: <LiaGlobeEuropeSolid className='text-purple-500' /> }
            ]
        },
        {
            category: "Taijutsu",
            technologies: [
                { name: 'Leaf Hurricane', icon: <PiHurricaneBold className='text-green-500' /> },
                { name: 'Dynamic Entry', icon: <MdOutlineSportsMartialArts className='text-blue-500' /> },
                { name: 'Lotus', icon: <PiFlowerLotusFill className='text-red-500' /> },
                { name: 'Shadow of the Dancing Leaf', icon: <MdEnergySavingsLeaf className='text-gray-500' /> }
            ]
        },
        {
            category: "Genjutsu",
            technologies: [
                { name: 'Susano', icon: <FaHandRock className='text-purple-500' /> },
                { name: 'mangekyou sharingan', icon: <IoLogoReact className='text-red-500' /> },
                { name: 'Sharingan', icon: <PiEyeFill className='text-red-500' /> },
                { name: 'Infinite Tsukuyomi', icon: <LiaBullseyeSolid className='text-red-500' /> }
            ]
        },
        {
            category: "Achievements",
            technologies: [
                { name: 'Chuunin Exam', icon: <FaMedal className='text-yellow-500' /> },
                { name: 'Jounin Promotion', icon: <FaMedal className='text-blue-500' /> },
                { name: 'Anbu Captain', icon: <FaMedal className='text-gray-500' /> },
                { name: 'Hokage', icon: <FaMedal className='text-red-500' /> }
            ]
        }
    ];

    return (
        <motion.div
            initial={{ scale: 0.3 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className='flex flex-col items-center gap-6 p-2 min-h-screen mt-8 lg:mt-0' id='skills'>
            <div>
                <span className='text-2xl text-gray-300 font-semibold md:text-4xl'>Skills</span>
            </div>

            <HeadingHelper text={"I've successfully completed a variety of missions, from D-rank to S-rank, leveraging my skills and experience."} />

            <div className='flex flex-wrap justify-around items-center gap-12 p-4'>
                {
                    skills.map((el, index) => (
                        <div key={index} className='mt-6 w-80 md:w-1/2 lg:w-1/3 card-container skills-card-container'>
                            <div className='text-center'>
                                <span className='text-gray-300/90 font-semibold text-xl md:text-2xl'>{el.category}</span>
                            </div>
                            <div className='flex flex-col justify-center items-center md:grid md:grid-cols-2 gap-2 mt-2 text-left'>
                                {
                                    el.technologies.map((tech, index) => (
                                        <div key={index} className={`mt-2 flex gap-2 items-center p-2`}>
                                            <span className='text-sm md:text-3xl'>{tech.icon}</span>
                                            <span className='text-gray-400 font-regular text-sm lg:text-lg'>{tech.name}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </motion.div>
    )
}

export default Skills;
