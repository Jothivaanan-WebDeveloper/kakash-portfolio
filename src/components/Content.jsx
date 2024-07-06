import React from 'react'

const Content = ({ text }) => {
    return (
        <span className='text-sm md:text-base text-gray-400 font-medium tracking-wider'>
            {text}
        </span>
    )
}

export default Content