import React from 'react'

const HeadingHelper = ({ text }) => {
    return (
        <>
            <div className='mt- text-center max-w-[400px] md:max-w-[700px]'>
                <span className='text-base md:text-xl text-gray-400 font-medium tracking-wider leading-loose'>
                    {text}
                </span>
            </div>
            <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        </>
    )
}

export default HeadingHelper