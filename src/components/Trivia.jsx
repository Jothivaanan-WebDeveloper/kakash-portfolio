import React from 'react'
import HeadingHelper from './Helpers/HeadingHelper';
import { motion } from 'framer-motion';
import { ImStarEmpty, ImStarFull } from 'react-icons/im';

const Trivia = () => {
    const trivia = [
        {
            title: "Genius Prodigy",
            image: "https://i.pinimg.com/736x/5c/65/dd/5c65dd73b1ba051dc24069d274393f2f.jpg",  // Replace with actual image path
            description: "From graduating at the top of my class to becoming a Jonin at a young age, my skills as a prodigy have been recognized throughout my life.",
            favoriteStars: 4
        },
        {
            title: "Anbu Captain",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU2GpYF9pSE6lV_xWb8rqLUf9fVfRMDGLn2g&s",  // Replace with actual image path
            description: "As a young shinobi, I served as an Anbu captain. It was a role that demanded skill, leadership, and a strong will.",
            favoriteStars: 3
        },
        {
            title: "Sharingan Master",
            image: "https://preview.redd.it/what-were-fan-theories-about-kakashis-sharingan-before-his-v0-upygx3cpebub1.png?auto=webp&s=18a74a9b31b898c5cb0820d6f63573b3a6eeb727",  // Replace with actual image path
            description: "Gifted with the Sharingan by my friend Obito, I mastered its abilities and used them to protect my comrades and village.",
            favoriteStars: 4
        },
        {
            title: "Lightning Blade",
            image: "https://dthezntil550i.cloudfront.net/4r/latest/4r1909170603420180010961451/1280_960/03bb4d30-7b9a-4843-a90a-ef96f578c0ac.png",  // Replace with actual image path
            description: "I developed the Lightning Blade, an advanced form of Chidori, to increase its power and precision. It's one of my signature techniques.",
            favoriteStars: 3
        },
        {
            title: "Mysterious Face",
            image: "https://entertainment.inquirer.net/files/2016/07/Screen-Shot-2016-07-29-at-2.58.27-PM.png",  // Replace with actual image path
            description: "For years, I kept my face hidden behind a mask. It became a mystery, even to my closest friends, until I finally revealed it.",
            favoriteStars: 3
        },
        {
            title: "Love for Icha Icha",
            image: "https://m.media-amazon.com/images/I/41OTbmQOgBL.jpg",  // Replace with actual image path
            description: "One of my favorite pastimes is reading the Icha Icha series by Jiraiya. It's a guilty pleasure that I enjoy during my downtime.",
            favoriteStars: 5
        },
        {
            title: "Sixth Hokage",
            image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2018/12/Kakashi-looks-down-while-wearing-the-Hokage-garb-in-Naruto-Shippuden.jpg",  // Replace with actual image path
            description: "After the Fourth Great Ninja War, I took on the role of Sixth Hokage, leading the village through a period of peace and reconstruction.",
            favoriteStars: 3
        },

        {
            title: "Team 7 Leader",
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/899dc915-b31e-4a53-bbe5-7a5dcc7014e3/dbtcxyw-6dd8a9f2-a63c-4fe0-a978-38267d9ffdb6.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg5OWRjOTE1LWIzMWUtNGE1My1iYmU1LTdhNWRjYzcwMTRlM1wvZGJ0Y3h5dy02ZGQ4YTlmMi1hNjNjLTRmZTAtYTk3OC0zODI2N2Q5ZmZkYjYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.va5pubyX1fktN1StR5kGtWs15qTSqQ3oXCv4HSjIlEc",  // Replace with actual image path
            description: "I had the honor of leading Team 7, training Naruto, Sasuke, and Sakura, and guiding them through many difficult missions.",
            favoriteStars: 4
        },

        {
            title: "Hokage's Advisor",
            image: "https://i.pinimg.com/736x/71/74/48/717448a07a23ac5981e73fa93c49bc66.jpg",  // Replace with actual image path
            description: "During my tenure as Hokage, I served as a trusted advisor, assisting in crucial decisions that shaped the future of the village.",
            favoriteStars: 2
        }
    ];

    const renderStars = (favouriteStars) => {
        const stars = [];
        const totalStars = 5;

        for (let index = 0; index < totalStars; index++) {
            if (index < favouriteStars) {
                stars.push(<ImStarFull />)
            } else {
                stars.push(<ImStarEmpty />)
            }
        }
        return stars;
    }


    return (
        <section className='flex flex-col items-center gap-6 p-2 min-h-screen mt-12' id='trivia'>
            <div>
                <span className='text-gray-300 font-semibold text-2xl md:text-4xl'>Trivia</span>
            </div>
            <div>
                <HeadingHelper text={"Throughout my life, I've encountered many intriguing and unique experiences that shaped me into who I am today."} />
            </div>
            <div className='lg:mt-18 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 place-content-center place-items-center'>
                {
                    trivia.map((el, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
                            key={index}
                            className='card-container flex flex-col md:flex-row gap-4 justify-center items-center md:items-start p-2'>
                            <div className=''>
                                <img
                                    className='object-cover rounded-full w-14 h-14 xl:w-24 xl:h-24'  // Ensure width and height are equal
                                    src={el.image}  // Replace with actual image source
                                    alt={el.title}  // Replace with alt text
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='max-w-[300px] flex flex-col text-gray-300'>
                                    <span className='text-base font-medium'>
                                        {el.title}
                                    </span>
                                    <span className='text-sm font-normal'>
                                        {el.description}
                                    </span>
                                </div>
                                <div className='text-gray-400 flex gap-2 animate-pulse duration-300 ease-in-out'>
                                    {
                                        renderStars(el.favoriteStars)
                                    }
                                </div>
                            </div>
                        </motion.div>
                    ))
                }


            </div>
        </section>
    )
}

export default Trivia