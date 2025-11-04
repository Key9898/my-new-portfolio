import { useState } from 'react'
import LanguagesPieChart from './LanguagesPieChart'
import ShowcaseTabs from './ShowcaseTabs'
import ShowcasePagination from './ShowcasePagination'
import { GiTeamIdea } from "react-icons/gi"
import Logo from '../../assets/Logo/logo.svg'
import AsiaYouthsAssociationDesktop from '../../assets/Showcase/asia_youths_association_desktop.jpg'
import AbhidhammaSocietyDesktop from '../../assets/Showcase/abhidhamma_society_desktop.jpg'
import EzMyanmarDesktop from '../../assets/Showcase/ez_myanmar_desktop.jpg'
import IDueCareDesktop from '../../assets/Showcase/i_due_care_desktop.jpg'
import ZayBannDesktop from '../../assets/Showcase/zay_bann_desktop.jpg'
import OldPortfolioDesktop from '../../assets/Showcase/old_portfolio_desktop.jpg'
import HeavenlyFlowersDesktop from '../../assets/Showcase/heavenly_flowers_desktop.jpg'
import EvergreenHillDesktop from '../../assets/Showcase/evergreen_hill_desktop.jpg'
import AsiaYouthsAssociationTablet from '../../assets/Showcase/asia_youths_association_tablet.jpg'
import AbhidhammaSocietyTablet from '../../assets/Showcase/abhidhamma_society_tablet.jpg'
import EzMyanmarTablet from '../../assets/Showcase/ez_myanmar_tablet.jpg'
import IDueCareTablet from '../../assets/Showcase/i_due_care_tablet.jpg'
import ZayBannTablet from '../../assets/Showcase/zay_bann_tablet.jpg'
import OldPortfolioTablet from '../../assets/Showcase/old_portfolio_tablet.jpg'
import HeavenlyFlowersTablet from '../../assets/Showcase/heavenly_flowers_tablet.jpg'
import EvergreenHillTablet from '../../assets/Showcase/evergreen_hill_tablet.jpg'
import AsiaYouthsAssociationMobile from '../../assets/Showcase/asia_youths_association_mobile.jpg'
import AbhidhammaSocietyMobile from '../../assets/Showcase/abhidhamma_society_mobile.jpg'
import EzMyanmarMobile from '../../assets/Showcase/ez_myanmar_mobile.jpg'
import IDueCareMobile from '../../assets/Showcase/i_due_care_mobile.jpg'
import ZayBannMobile from '../../assets/Showcase/zay_bann_mobile.jpg'
import OldPortfolioMobile from '../../assets/Showcase/old_portfolio_mobile.jpg'
import HeavenlyFlowersMobile from '../../assets/Showcase/heavenly_flowers_mobile.jpg'
import EvergreenHillMobile from '../../assets/Showcase/evergreen_hill_mobile.jpg'

interface ButtonData {
  label: string
  url: string
}

interface Post {
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

const posts: Post[] = [
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
    title: 'IDue Care',
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
]

export default function Showcase() {
  const [activeTab, setActiveTab] = useState<'Showcase' | 'WordPress Projects' | 'React Projects'>('Showcase')
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 3

  const filteredPosts = posts.filter((post) => {
    if (activeTab === 'WordPress Projects') return post.category?.title === 'WordPress'
    if (activeTab === 'React Projects') return post.category?.title === 'React'
    return true // Showcase => show all
  })

  const totalPages =
    filteredPosts.length === 0 ? 0 : Math.ceil(filteredPosts.length / postsPerPage)

  const startIndex = (currentPage - 1) * postsPerPage
  const displayedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage)

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName as any)
    setCurrentPage(1)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div className="relative bg-gradient-to-t from-slate-800 to-sky-950 py-24 pt-0 sm:py-32 sm:pt-0 lg:pt-0">
      {/* Mobile-only seam mask at the very top of the Showcase section */}
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-b from-slate-950 to-sky-950 md:hidden pointer-events-none z-20"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-8">
        {/* Grid: mobile/tablet = 1 col, desktop = 3 cols */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LanguagesPieChart: 1 column on desktop */}
          <div className="w-full lg:col-span-1">
            {/* Clip any 1px hairline above the pie on mobile */}
            <div className="relative overflow-hidden pt-px md:pt-0">
              <LanguagesPieChart />
            </div>
          </div>
          {/* Showcase posts: span 2 columns on desktop */}
          <div className="w-full lg:col-span-2">
            {/* Tabs hooked to Showcase */}
            <ShowcaseTabs activeTab={activeTab} onTabChange={handleTabChange} />

            <div className="space-y-12 pt-12 pb-12">
              {displayedPosts.map((post) => (
                <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                  <div className="relative aspect-video sm:aspect-2/1 lg:aspect-square lg:w-80 lg:shrink-0">
                    <img
                      alt={post.imageAlt}
                      src={post.image.mobile}
                      srcSet={`${post.image.mobile} 640w, ${post.image.tablet} 1280w, ${post.image.desktop} 1920w`}
                      sizes="(min-width:1024px) 320px, 100vw"
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                      className="absolute inset-0 size-full rounded-lg shadow-xl bg-gray-800 object-cover"
                    />
                    <div className="absolute inset-0 rounded-lg shadow-xl inset-ring inset-ring-white/10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 text-base">
                      <time dateTime={post.date} className="text-gray-400">
                        {post.date}
                      </time>
                      <span
                        className="relative z-10 rounded-full bg-gray-800/60 px-3 py-1.5 font-medium text-base text-gray-300 hover:bg-gray-800"
                      >
                        {post.category.title}
                      </span>
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-3 text-xl font-semibold text-white">
                        <span className="absolute inset-0 pointer-events-none" />
                        {post.title}
                      </h3>
                      <p className="mt-5 text-lg/6 text-gray-400">{post.description}</p>

                      {/* Buttons */}
                      {Array.isArray(post.button) ? (
                        <div className="mt-6 flex gap-3">
                          {post.button.map((btn, idx) => (
                            <button
                              type="button"
                              key={idx}
                              onClick={() => {
                                const url = btn.url.startsWith('http') ? btn.url : `https://${btn.url}`;
                                window.open(url, '_blank');
                                }}
                              className={
                                btn.label.toLowerCase().includes('github')
                                  ? 'inline-flex items-center rounded-lg bg:white/10 ring-1 ring-inset ring-slate-300 px-3 py-2 text-sm font-semibold text-slate-300 shadow-xl hover:bg-white/20 hover:text-white transition-colors'
                                  : 'inline-flex items-center rounded-lg bg-sky-800 px-3 py-2 text-sm font-semibold text-white shadow-xl hover:bg-sky-700 transition-colors'
                              }
                            >
                              {btn.label}
                            </button>
                          ))}
                        </div>
                      ) : post.button && !Array.isArray(post.button) ? (
                        <div className="mt-6 flex gap-3">
                          <button 
                            type="button"
                            onClick={() => {
                              const raw = (post.button as ButtonData).url
                              const url = raw.startsWith('http') ? raw : `https://${raw}`
                              window.open(url, '_blank')
                            }}
                            className="inline-flex items-center rounded-lg bg-sky-800 px-3 py-2 text-sm font-semibold text-white shadow-xl hover:bg-sky-700 transition-colors"
                          >
                            {post.button.label}
                          </button>
                        </div>
                      ) : null}
                    </div>
                    {/* Author section */}
                    <div className="mt-6 flex border-t border-white/10 pt-6">
                      <div className="relative flex items-center gap-x-4">
                        {post.developer.name === 'Team Collabration' ? (
                          <div className="size-12 rounded-lg bg-gray-600 flex items-center justify-center text-sky-600">
                            <GiTeamIdea aria-hidden="true" className="size-9" />
                            <span className="sr-only">Team Collabration</span>
                          </div>
                        ) : post.developer.name.toLowerCase().includes('wunna') ? (
                          <img 
                            alt="Logo" 
                            src={Logo} 
                            loading="lazy"
                            decoding="async"
                            fetchPriority="low" 
                            className="size-12 rounded-lg bg-gray-600" />
                        ) : (
                          <div className="size-10 rounded-full bg-gray-800 flex items-center justify-center text-white font-semibold">
                            {post.developer.name.charAt(0).toUpperCase()}
                          </div>
                        )}
                        <div className="text-base">
                          <p className="font-semibold text-white">
                            <span className="absolute inset-0" />
                            {post.developer.name}
                          </p>
                          <p className="text-gray-400">{post.developer.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination hooked to Showcase */}
            <ShowcasePagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              totalPosts={filteredPosts.length}
              postsPerPage={postsPerPage}
            />
          </div>
        </div>
      </div>
    </div>
  )
}