import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { TiSocialFacebook } from 'react-icons/ti';
import { Link } from 'react-scroll';

const Footer = () => {
    const footerMenu = [
        {
            linkName: 'skills',
            offset: -500
        },
        {
            linkName: 'journey',
            offset: -200
        },
        {
            linkName: 'trivia',
            offset: -150
        }
    ];

    const footerIcons = [<FaFacebook />, <FaWhatsapp />, <FaInstagram />, <FaTwitter />, <FaLinkedin />];

    return (
        <footer className="w-full bg-gray-900 text-gray-400 py-8 mt-5 xl:-mt-24 2xl:mt-1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo or Website Name */}
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-xl font-bold text-gray-300">Kakashi Hatake</h1>
                    </div>
                    {/* Navigation Links */}
                    <div className="flex space-x-6 mb-6 md:mb-0">
                        {
                            footerMenu.map((el, index) => (
                                <Link
                                    key={index}
                                    to={el.linkName}
                                    className='text-sm border-b-2 border-gray-400 md:border-none capitalize cursor-pointer hover:text-gray-300'
                                    smooth={true} duration={800} offset={el.offset}
                                >
                                    {el.linkName}
                                </Link>
                            ))
                        }
                    </div>
                    {/* Social Media Links */}
                    <div className="flex space-x-4 mb-4 md:mb-0 text-sm">
                        {
                            footerIcons.map((el, index) => (
                                <div key={index}>{el}</div>
                            ))
                        }
                    </div>
                </div>
                {/* Contact Information */}
                <div className="mt-2 text-center">
                    <p className='text-sm'>Contact me at : &nbsp;
                        <a href="mailto:kakashi@hiddenleaf.com"
                            className="text-gray-300 hover:text-gray-200">
                            kakashi@hiddenleaf.com</a>
                    </p>
                    <p className='text-xs md:text-sm mt-4'>&copy; {new Date().getFullYear()} Kakashi Hatake. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
