import { useState, useMemo } from 'react'
import ShowcaseTabs from './ShowcaseTabs'
import ShowcaseCard from './ShowcaseCard'
import ShowcasePagination from './ShowcasePagination'
import { posts } from '../../data/projects'

export default function Showcase() {
    const [activeTab, setActiveTab] = useState('Showcase')
    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 3


    const filteredPosts = useMemo(() => {
        if (activeTab === 'Showcase') return posts
        if (activeTab === 'WordPress Projects') return posts.filter(post => post.category.title === 'WordPress')
        if (activeTab === 'React Projects') return posts.filter(post => post.category.title === 'React')
        return posts
    }, [activeTab])

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
    const currentPosts = filteredPosts.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    )

    const handleTabChange = (tabName: string) => {
        setActiveTab(tabName)
        setCurrentPage(1)
    }

    return (
        <div className="bg-gradient-to-t from-slate-800 to-sky-950 py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <ShowcaseTabs activeTab={activeTab} onTabChange={handleTabChange} />

                <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-6 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-1">
                    {currentPosts.map((post) => (
                        <ShowcaseCard key={post.id} post={post} />
                    ))}
                </div>

                <ShowcasePagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                    totalPosts={filteredPosts.length}
                    postsPerPage={postsPerPage}
                />
            </div>
        </div>
    )
}
