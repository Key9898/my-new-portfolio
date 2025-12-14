import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline'

const Resume = '/Resume/wunna-resume.pdf'
const HeroMobile = '/Hero/hero_mobile.jpg'
const HeroTablet = '/Hero/hero_tablet.jpg'
const HeroDesktop = '/Hero/hero_desktop.jpg'

export default function HeroSection() {

  const scrollToSection = (id: string, duration = 1200, offset = 24) => {
    const sectionId = id.startsWith('#') ? id.slice(1) : id
    const target = document.getElementById(sectionId)
    if (!target) return

    const start = window.scrollY
    const targetTop = target.getBoundingClientRect().top + window.scrollY
    const end = targetTop + offset
    const change = end - start
    const startTime = performance.now()

    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeInOutQuad(progress)
      window.scrollTo(0, start + change * eased)
      if (elapsed < duration) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }

  return (
    <div className="bg-gradient-to-t from-slate-800 to-sky-950 h-[100dvh] overflow-hidden">
      <div className="relative h-full">
        <div className="mx-auto max-w-7xl h-full">
          <div className="relative z-10 lg:w-full lg:max-w-2xl h-full flex items-center">
            {/* Divider stays */}
            <div
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform lg:block bg-gradient-to-t from-slate-800 to-sky-950 [clip-path:polygon(0_0,100%_0,55%_100%,0_100%)]"
            />
            <div className="relative px-4 sm:px-8 lg:px-8 lg:pr-0 w-full">
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-x-xl lg:mx-0 lg:max-w-xl">
                <h2 className="text-5xl font-semibold tracking-tight text-pretty text-white sm:text-7xl">
                  Crafting Digital Experiences
                </h2>
                <p className="mt-8 ml-1 sm:ml-1 text-lg/8 font-medium text-pretty text-white/80 sm:text-xl/8">
                  I am a passionate Frontend Developer focused on building clean, efficient, and responsive user interfaces. I specialize in turning complex problems into beautiful and functional digital experiences.
                </p>
                <div className="flex mt-6 ml-2 sm:mt-10 sm:ml-2 lg:ml-1">
                  <div className="relative max-w-full rounded-lg shadow-xl px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-2 lg:bg-white/10 lg:hover:bg-white/20 lg:ring-1 lg:ring-white/10 lg:hover:ring-white/20 sm:bg-sky-900/50 sm:ring-1 sm:ring-white/20 bg-sky-900/50 ring-1 ring-white/20 flex items-center gap-2 flex-wrap">
                    <span className="flex-1 text-xs sm:text-base lg:text-base text-gray-400">
                      For a detailed look at my background.
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        // New tab
                        window.open(Resume, '_blank', 'noopener,noreferrer')
                        // Download
                        const link = document.createElement('a');
                        link.href = Resume;
                        link.download = 'Wunna_Aung_CV.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      className="font-semibold text-xs sm:text-base lg:text-base text-sky-500 sm:text-sky-500 lg:text-sky-600 flex-shrink-0 sm:whitespace-nowrap hover:scale-110 transition-transform duration-300"
                    >
                      Download Resume <span aria-hidden="true">&rarr;</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Down Arrow */}
        <button
          type="button"
          aria-label="Scroll to Capabilities"
          onClick={() => {
            scrollToSection('capabilities')
          }}
          className="absolute inset-x-0 bottom-0 z-20 mx-auto flex h-10 w-10 items-center justify-center rounded-lg shadow-xl bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20 transition-all duration-200 hover:scale-105"
        >
          <ChevronDoubleDownIcon aria-hidden="true" className="size-6 animate-bounce" />
        </button>
        {/* Background image: full cover on all sizes, right half on lg+ */}
        <div className="bg-gradient-to-t from-slate-800 to-sky-950 absolute inset-0 lg:inset-y-0 lg:right-0 lg:left-auto lg:w-1/2">
          <img
            alt="Hero Image"
            src={HeroDesktop}
            srcSet={`${HeroMobile} 768w, ${HeroTablet} 1280w, ${HeroDesktop} 1920w`}
            sizes="(min-width:1024px) 50vw, 100vw"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-slate-700/30"></div>
        </div>
      </div>
    </div>
  )
}