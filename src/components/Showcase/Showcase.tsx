import { useState } from 'react'
import LanguagesPieChart from './LanguagesPieChart'
import ShowcaseTabs from './ShowcaseTabs'
import ShowcasePagination from './ShowcasePagination'
import ShowcaseCard from './ShowcaseCard'
import { posts } from '../../data/projects'

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
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-8">
        {/* Grid: mobile/tablet = 1 col, desktop = 3 cols */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LanguagesPieChart: 1 column on desktop */}
          <div className="w-full lg:col-span-1">
            {/* Clip any 1px hairline above the pie on mobile */}
            <div className="relative overflow-hidden md:pt-0">
              <LanguagesPieChart />
            </div>
          </div>
          {/* Showcase posts: span 2 columns on desktop */}
          <div className="w-full lg:col-span-2">
            {/* Tabs hooked to Showcase */}
            <ShowcaseTabs activeTab={activeTab} onTabChange={handleTabChange} />

            <div className="space-y-12 pt-12 pb-12">
              {displayedPosts.map((post) => (
                <ShowcaseCard key={post.id} post={post} />
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