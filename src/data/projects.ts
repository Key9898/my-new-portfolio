const AsiaYouthsAssociationDesktop = '/Showcase/asia_youths_association_desktop.jpg'
const AbhidhammaSocietyDesktop = '/Showcase/abhidhamma_society_desktop.jpg'
const EzMyanmarDesktop = '/Showcase/ez_myanmar_desktop.jpg'
const IDueCareDesktop = '/Showcase/i_due_care_desktop.jpg'
const ZayBannDesktop = '/Showcase/zay_bann_desktop.jpg'
const OldPortfolioDesktop = '/Showcase/old_portfolio_desktop.jpg'
const HeavenlyFlowersDesktop = '/Showcase/heavenly_flowers_desktop.jpg'
const EvergreenHillDesktop = '/Showcase/evergreen_hill_desktop.jpg'
const AsiaYouthsAssociationTablet = '/Showcase/asia_youths_association_tablet.jpg'
const AbhidhammaSocietyTablet = '/Showcase/abhidhamma_society_tablet.jpg'
const EzMyanmarTablet = '/Showcase/ez_myanmar_tablet.jpg'
const IDueCareTablet = '/Showcase/i_due_care_tablet.jpg'
const ZayBannTablet = '/Showcase/zay_bann_tablet.jpg'
const OldPortfolioTablet = '/Showcase/old_portfolio_tablet.jpg'
const HeavenlyFlowersTablet = '/Showcase/heavenly_flowers_tablet.jpg'
const EvergreenHillTablet = '/Showcase/evergreen_hill_tablet.jpg'
const AsiaYouthsAssociationMobile = '/Showcase/asia_youths_association_mobile.jpg'
const AbhidhammaSocietyMobile = '/Showcase/abhidhamma_society_mobile.jpg'
const EzMyanmarMobile = '/Showcase/ez_myanmar_mobile.jpg'
const IDueCareMobile = '/Showcase/i_due_care_mobile.jpg'
const ZayBannMobile = '/Showcase/zay_bann_mobile.jpg'
const OldPortfolioMobile = '/Showcase/old_portfolio_mobile.jpg'
const HeavenlyFlowersMobile = '/Showcase/heavenly_flowers_mobile.jpg'
const EvergreenHillMobile = '/Showcase/evergreen_hill_mobile.jpg'
const EBookNookReal = '/Showcase/e_book_nook_real.png'
const StackPackBundlerReal = '/Showcase/stackpack_bundler_real.png'
const EasyGoReal = '/Showcase/easy_go_real.png'

export interface ButtonData {
    label: string
    url: string
}

export interface Post {
    id: number
    title: string
    description: string
    imageAlt: string
    image: {
        mobile: string
        tablet: string
        desktop: string
    }
    date: string
    category: { title: string }
    button: ButtonData | ButtonData[]
    developer: {
        name: string
        role: string
    }
}

export const posts: Post[] = [
    {
        id: 1,
        title: 'Asia Youths Association',
        description:
            'An informational website developed for the Asia Youths Association (AYA), a youth-led non-profit organization based in Mae Sot, Thailand. Built entirely with WordPress, the site aims to showcase their programs, leadership training, and advocacy work. I handled the complete WordPress development for this project.',
        imageAlt: 'Asia Youths Association',
        image: {
            mobile: AsiaYouthsAssociationMobile,
            tablet: AsiaYouthsAssociationTablet,
            desktop: AsiaYouthsAssociationDesktop,
        },
        date: 'MAY, 2025',
        category: { title: 'WordPress' },
        button: { label: 'Live Demo', url: 'https://asiayouths.org/' },
        developer: {
            name: 'Wunna Aung',
            role: 'WordPress Developer',
        },
    },
    {
        id: 9,
        title: 'E-Book Nook',
        description:
            'A digital sanctuary for book lovers. This web application offers a curated collection of e-books with a focus on user experience, featuring a responsive reader interface, personalized bookshelves, and seamless navigation.',
        imageAlt: 'E-Book Nook',
        image: {
            mobile: EBookNookReal,
            tablet: EBookNookReal,
            desktop: EBookNookReal,
        },
        date: 'DEC, 2025',
        category: { title: 'React' },
        button: [
            { label: 'Live Demo', url: 'https://e-book-nook.vercel.app/' },
            { label: 'View GitHub', url: 'https://github.com/Key9898/E-Book-Nook' }
        ],
        developer: {
            name: 'Wunna Aung',
            role: 'Front-end Developer',
        },
    },
    {
        id: 11,
        title: 'EasyGo',
        description:
            'A comprehensive car rental platform aimed at simplifying the booking process. Features include real-time availability checking, an extensive fleet gallery, and a user-friendly reservation system for effortless travel planning.',
        imageAlt: 'EasyGo',
        image: {
            mobile: EasyGoReal,
            tablet: EasyGoReal,
            desktop: EasyGoReal,
        },
        date: 'DEC, 2025',
        category: { title: 'React' },
        button: [
            { label: 'Live Demo', url: 'https://easy-go-phi.vercel.app/' },
            { label: 'View GitHub', url: 'https://github.com/Key9898/EasyGo' }
        ],
        developer: {
            name: 'Wunna Aung',
            role: 'Front-end Developer',
        },
    },
    {
        id: 2,
        title: 'Zay Bann',
        description:
            'A company e-commerce platform built to sell Myanmar food products within the United States. This project leverages WordPress and the WoodMart theme for robust e-commerce capabilities. As part of the team, my role focused on WordPress development and theme customization.',
        imageAlt: 'Zay Bann',
        image: {
            mobile: ZayBannMobile,
            tablet: ZayBannTablet,
            desktop: ZayBannDesktop,
        },
        date: 'OCT, 2025',
        category: { title: 'WordPress' },
        button: { label: 'Live Demo', url: 'https://myanmarzaybann.com/' },
        developer: {
            name: 'Team Collabration',
            role: 'WordPress Development',
        },
    },
    {
        id: 3,
        title: 'The Evergeen Hill',
        description:
            'A visually-driven static website for "The Evergreen Hill" hotel in Kalaw. This project was custom-coded using a modern stack (React, TypeScript, Tailwind CSS) to ensure a fast, elegant, and responsive user experience. I was responsible for the entire front-end development.',
        imageAlt: 'The Evergreen Hill',
        image: {
            mobile: EvergreenHillMobile,
            tablet: EvergreenHillTablet,
            desktop: EvergreenHillDesktop,
        },
        date: 'OCT, 2025',
        category: { title: 'React' },
        button: [
            { label: 'Live Demo', url: 'https://the-evergreen-hill.vercel.app/' },
            { label: 'View GitHub', url: 'https://github.com/Key9898/The-Evergreen-Hill' }
        ],
        developer: {
            name: 'Wunna Aung',
            role: 'Front-end Developer',
        },
    },
    {
        id: 4,
        title: 'EZ Myanmar',
        description:
            'A company website for "EZ Myanmar," providing simple digital solutions and services. As a collaborative team project, my contribution was focused on the WordPress development, building out the site’s features and ensuring a responsive layout.',
        imageAlt: 'EZ Myanmar',
        image: {
            mobile: EzMyanmarMobile,
            tablet: EzMyanmarTablet,
            desktop: EzMyanmarDesktop,
        },
        date: 'AUG, 2025',
        category: { title: 'WordPress' },
        button: { label: 'Live Demo', url: 'https://ezmyanmar.com/' },
        developer: {
            name: 'Team Collabration',
            role: 'WordPress Development',
        },
    },
    {
        id: 5,
        title: 'IDueCare',
        description:
            'A corporate website for "IDue Care," a technology company focused on simplifying business services in Myanmar. This was a team collaboration, where my primary role involved WordPress development to implement the site\'s design and functionality.',
        imageAlt: 'IDue Care',
        image: {
            mobile: IDueCareMobile,
            tablet: IDueCareTablet,
            desktop: IDueCareDesktop,
        },
        date: 'AUG, 2025',
        category: { title: 'WordPress' },
        button: { label: 'Live Demo', url: 'https://iduecare.com/' },
        developer: {
            name: 'Team Collabration',
            role: 'WordPress Development',
        },
    },
    {
        id: 6,
        title: 'Abhidhamma Society',
        description:
            'An informational website for the "Abhidhamma Society," designed to share teachings, Dhamma activities, and resources. As the sole developer on this company project, I was responsible for the complete WordPress development, from setup and design implementation to content structure.',
        imageAlt: 'Abhidhamma Society',
        image: {
            mobile: AbhidhammaSocietyMobile,
            tablet: AbhidhammaSocietyTablet,
            desktop: AbhidhammaSocietyDesktop,
        },
        date: 'JUN, 2025',
        category: { title: 'WordPress' },
        button: { label: 'Live Demo', url: 'https://abhidhammasociety.com/' },
        developer: {
            name: 'Wunna Aung',
            role: 'WordPress Developer',
        },
    },
    {
        id: 7,
        title: 'Heavenly Flowers',
        description:
            'A visually elegant and responsive website developed for a conceptual flower shop, "Heavenly Flowers (Fleurs du Ciel)." This solo project was built using React, TypeScript, and Tailwind CSS to create a modern and aesthetically pleasing user interface for showcasing floral products and services.',
        imageAlt: 'Heavenly Flowers',
        image: {
            mobile: HeavenlyFlowersMobile,
            tablet: HeavenlyFlowersTablet,
            desktop: HeavenlyFlowersDesktop,
        },
        date: 'SEP, 2025',
        category: { title: 'React' },
        button: [
            { label: 'Live Demo', url: 'https://heavenly-flowers.vercel.app/' },
            { label: 'View GitHub', url: 'https://github.com/Key9898/Heavenly-Flowers' }
        ],
        developer: {
            name: 'Wunna Aung',
            role: 'Front-end Developer',
        },
    },
    {
        id: 8,
        title: 'My Portfolio',
        description:
            'My previous personal portfolio (built July 2025), created from scratch to showcase my skills and projects. This site was developed using React, TypeScript, and Tailwind CSS, demonstrating my ability to build a clean, responsive, and custom-coded front-end application.',
        imageAlt: 'My Old Portfolio',
        image: {
            mobile: OldPortfolioMobile,
            tablet: OldPortfolioTablet,
            desktop: OldPortfolioDesktop,
        },
        date: 'JUL, 2025',
        category: { title: 'React' },
        button: [
            { label: 'Live Demo', url: 'https://my-portfolio-pi-nine-36.vercel.app/' },
            { label: 'View GitHub', url: 'https://github.com/Key9898/my-portfolio' }
        ],
        developer: {
            name: 'Wunna Aung',
            role: 'Front-end Developer',
        },
    },
    {
        id: 10,
        title: 'StackPack Bundler',
        description:
            'A powerful developer tool designed to streamline the process of bundling web components. It provides a real-time preview, code minification, and an intuitive dashboard for managing project assets.',
        imageAlt: 'StackPack Bundler',
        image: {
            mobile: StackPackBundlerReal,
            tablet: StackPackBundlerReal,
            desktop: StackPackBundlerReal,
        },
        date: 'NOV, 2025',
        category: { title: 'React' },
        button: [
            { label: 'Live Demo', url: 'https://stack-pack-bundler.vercel.app/' },
            { label: 'View GitHub', url: 'https://github.com/Key9898/StackPack-Bundler' }
        ],
        developer: {
            name: 'Wunna Aung',
            role: 'Front-end Developer',
        },
    },
]
