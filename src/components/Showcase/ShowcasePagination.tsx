import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  totalPosts: number
  postsPerPage: number
}

export default function ShowcasePagination({
  currentPage,
  totalPages,
  onPageChange,
  totalPosts,
  postsPerPage,
}: PaginationProps) {
  // Fix: remove undefined firstPageCount/defaultPageCount usage; guard postsPerPage
  const perPage =
    typeof postsPerPage === 'number' && isFinite(postsPerPage) && postsPerPage > 0
      ? postsPerPage
      : 4

  const startItem = totalPosts === 0 ? 0 : (currentPage - 1) * perPage + 1
  const endItem = totalPosts === 0 ? 0 : Math.min(currentPage * perPage, totalPosts)

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  const handlePageClick = (page: number) => {
    onPageChange(page)
  }

  // Generate page numbers array
  const pageNumbers: number[] = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="mt-8 border-t border-gray-700 pt-6">
      {/* Make pagination take the exact column width */}
      <div className="w-full px-0">
        <div className="flex items-center justify-between py-6">
          {/* Mobile pagination */}
          <div className="flex flex-1 justify-between sm:hidden">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentPage === 1 || totalPages === 0}
              className="relative inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={currentPage === totalPages || totalPages === 0}
              className="relative ml-3 inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>

          {/* Desktop pagination */}
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Showing <span className="font-medium">{startItem}</span> to <span className="font-medium">{endItem}</span> of{' '}
                <span className="font-medium">{totalPosts}</span> results
              </p>
            </div>
            <div>
              <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-lg shadow-xl">
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={currentPage === 1 || totalPages === 0}
                  className="relative inline-flex items-center rounded-l-lg px-2 py-2 text-slate-400 ring-1 ring-inset ring-slate-300 hover:bg-sky-700 focus:z-20 focus:outline-offset-0 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
                </button>

                {pageNumbers.map((page) => (
                  <button
                    type="button"
                    key={page}
                    onClick={() => handlePageClick(page)}
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold transition-colors ${currentPage === page
                      ? 'z-10 bg-sky-600 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600'
                      : 'text-slate-500 ring-1 ring-inset ring-slate-300 hover:bg-sky-700 hover:text-white focus:z-20 focus:outline-offset-0'
                      }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={currentPage === totalPages || totalPages === 0}
                  className="relative inline-flex items-center rounded-r-lg px-2 py-2 text-slate-400 ring-1 ring-inset ring-slate-300 hover:bg-sky-700 focus:z-20 focus:outline-offset-0 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}