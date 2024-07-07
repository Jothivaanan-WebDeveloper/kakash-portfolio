import React from 'react'
import { motion } from 'framer-motion';
import Content from './Helpers/Content'
import Project1 from '../assets/1.png';
import Project2 from '../assets/2.png';
import Project3 from '../assets/3.jpg';
import Project4 from '../assets/4.jpg';
import Project5 from '../assets/5.jpg';
import HeadingHelper from './Helpers/HeadingHelper';

const Journey = () => {
    const projects = [
        {
            img: Project1,
            title: "Mission with Team Minato",
            description: "During the Third Shinobi World War, I was part of Team Minato, along with Obito Uchiha and Rin Nohara. On a crucial mission, Obito sacrificed his life to save mine and entrusted me with his Sharingan. This moment profoundly changed me and defined my path as a shinobi."
        },
        {
            img: Project2,
            title: "Formation of Team 7",
            description: "Years later, I became the leader of Team 7, guiding Naruto Uzumaki, Sasuke Uchiha, and Sakura Haruno. One of our early missions brought us face-to-face with the rogue ninja Zabuza Momochi and his accomplice Haku. These encounters taught us the harsh realities of the ninja world and the importance of teamwork and perseverance."
        },
        {
            img: Project3,
            title: "A Moment of Love",
            description: "In a rare moment of respite, I met a kind and gentle woman named Hanare. We shared a deep connection, and in an intimate moment, we kissed. Despite our feelings, we were destined to walk different paths, and we parted ways, cherishing the fleeting memory."
        },
        {
            img: Project4,
            title: "Fourth Great Ninja War",
            description: "During the Fourth Great Ninja War, I faced my old friend, Obito, who had become an enemy. Our confrontation was a test of will and emotions, but I stood firm for the sake of our future. My role in the war reaffirmed my dedication to protecting the village."
        },
        {
            img: Project5,
            title: "Becoming the Sixth Hokage",
            description: "After the war, I was appointed the Sixth Hokage of Konohagakure. My focus was on rebuilding the village, forging alliances, and mentoring the next generation. This period of leadership marked a time of peace and growth for our village."
        }
    ];

    return (
        <section id='journey' className='flex flex-col items-center gap-6 p-2 min-h-screen mt-8 md:mt-24 lg:mt-0'>

            <div className='text-center md:-mt-14 mb-0 md:mb-4 show-animation'>
                <span className='text-gray-300 text-2xl font-semibold md:text-4xl '>Journey</span>
            </div>

            <div className='show-animation'>
                <HeadingHelper text={"From the harsh realities of war to the peace of Hokage, my journey is one of growth."} />
            </div>

            <div className=''>
                {
                    projects.map((el, index) => (
                        <>
                            <motion.div
                                key={index}
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <div key={index}
                                    className={`flex flex-col items-center md:max-w-[1000px] md:items-start md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    <div className='w-full md:w-1/2 p-4 show-animation'>
                                        <img
                                            src={el.img}
                                            alt={el.title}
                                            className='w-full object-cover rounded-lg'
                                        />
                                        <div className='text-gray-300 mt-4 flex flex-col'>
                                            <span className='text-base md:text-xl font-medium space-y-8'>{el.title}</span>
                                            <span>
                                                <Content text={el.description} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                        </>

                    ))
                }
            </div>


        </section>
    )
}

export default Journey