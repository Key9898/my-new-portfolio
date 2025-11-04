import { useState } from 'react';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import styles from './SocialMedia.module.css';

const socialIcons = [
    {
        name: 'Facebook',
        icon: <FaFacebookF className="w-8 h-8" />,
        href: 'https://www.facebook.com/share/1M28avSs6J/',
        target: '_blank',
        rel: 'noopener noreferrer',
        color: 'bg-blue-600/90 hover:bg-blue-700/90'
    },
    {
        name: 'Instagram',
        icon: <FaInstagram className="w-8 h-8" />,
        href: 'https://www.instagram.com/key9898303?igsh=MWpxYjcxaGJ5OWtoeA==',
        target: '_blank',
        rel: 'noopener noreferrer',
        color: 'bg-gradient-to-br from-purple-600/90 via-pink-600/90 to-orange-500/90 hover:from-purple-700/90 hover:via-pink-700/90 hover:to-orange-600/90'
    },
    {
        name: 'GitHub',
        icon: <FaGithub className="w-8 h-8" />,
        href: 'https://github.com/Key9898',
        target: '_blank',
        rel: 'noopener noreferrer',
        color: 'bg-gray-800/90 hover:bg-gray-900/90'
    },
    {
        name: 'LinkedIn',
        icon: <FaLinkedinIn className="w-8 h-8" />,
        href: 'https://linkedin.com/in/key-wunna-aung',
        target: '_blank',
        rel: 'noopener noreferrer',
        color: 'bg-blue-700/90 hover:bg-blue-800/90'
    },
]

const SocialAccount = () => {
    const [socialMenuOpen, setSocialMenuOpen] = useState(false);

    return (
        <div className="fixed bottom-26 sm:bottom-14 lg:bottom-14 left-6 z-40">
            {/* Social Media Icons */}
            <div className={`flex flex-col space-y-3 mb-3 transition-all duration-300 ${socialMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                {socialIcons.map((social, index) => (
                    <a
                        key={social.name}
                        href={social.href}
                        target={social.target}
                        rel={social.rel}
                        className={`${styles.socialMediaLink} ${social.color} ${styles[`socialDelay${index}`]}`}
                        title={social.name}
                    >
                        {social.icon}
                    </a>
                ))}
            </div>

            {/* Main Chat Icon */}
            <button
                type="button"
                onClick={() => setSocialMenuOpen(!socialMenuOpen)}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-sky-800 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white hover:scale-110 hover:shadow-xl hover:bg-sky-700 transition-all duration-200 transform"
                aria-label="Open social media menu"
            >
                <ChatBubbleLeftRightIcon className={`w-8 h-8 transition-transform duration-200 ${socialMenuOpen ? 'rotate-360' : ''}`} />
            </button>
        </div>
    );
};

export default SocialAccount;