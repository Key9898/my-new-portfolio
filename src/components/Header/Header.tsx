import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
const Logo = '/Logo/logo.svg'

const navigation = [
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Profile', href: '#profile' },
    { name: 'Get in Touch', href: '#getInTouch' },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)
    const [activeSection, setActiveSection] = useState<string>('')
    const [inHero, setInHero] = useState(true)
    const [manualActive, setManualActive] = useState(false)

    // Header sticky toggle on scroll + detect if we are still in HeroSection
    useEffect(() => {
        const onScroll = () => {
            setIsSticky(window.scrollY > 10)
            const capEl = document.getElementById('capabilities')
            if (capEl) {
                const capTop = capEl.getBoundingClientRect().top + window.scrollY
                // While above Capabilities, keep "no active" state for menu
                setInHero(window.scrollY < capTop - 100)
            }
        }
        onScroll()
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Observe sections and update active menu item
    useEffect(() => {
        const ids = ['capabilities', 'showcase', 'profile', 'getInTouch']
        const elements = ids
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => !!el)

        if (elements.length === 0) return

        const observer = new IntersectionObserver(
            (entries) => {
                if (manualActive) return
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { threshold: 0.3, rootMargin: '0px 0px -30% 0px' }
        )

        elements.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [manualActive])

    // Accept active section updates from other components
    useEffect(() => {
        const handler = (e: Event) => {
            const id = (e as CustomEvent<string>).detail
            if (id) {
                setActiveSection(id)
                setManualActive(true)
            }
        }
        window.addEventListener('nav:setActiveSection', handler as EventListener)
        return () => window.removeEventListener('nav:setActiveSection', handler as EventListener)
    }, [])

    const isActive = (href: string) => {
        const id = href.startsWith('#') ? href.slice(1) : href
        if (manualActive) return activeSection === id
        if (inHero) return false
        return activeSection === id
    }

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

    // Compute active section by viewport visibility (fallback when manual override clears)
    const computeActiveSectionFromViewport = () => {
        const ids = ['capabilities', 'showcase', 'profile', 'getInTouch']
        const sections = ids
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => !!el)

        if (sections.length === 0) return ''

        const viewportH = window.innerHeight || document.documentElement.clientHeight
        let bestId = ''
        let bestScore = 0

        sections.forEach((sec) => {
            const rect = sec.getBoundingClientRect()
            const visible = Math.min(rect.bottom, viewportH) - Math.max(rect.top, 0)
            const ratio = Math.max(0, visible) / rect.height
            if (ratio > bestScore) {
                bestScore = ratio
                bestId = sec.id
            }
        })

        if (bestScore >= 0.6) return bestId

        let nearestId = ''
        let nearestDist = Infinity
        sections.forEach((sec) => {
            const rect = sec.getBoundingClientRect()
            const dist = Math.abs(rect.top)
            if (dist < nearestDist) {
                nearestDist = dist
                nearestId = sec.id
            }
        })
        return nearestId
    }

    // Listen for a sync event to re-align active menu with current viewport
    useEffect(() => {
        const sync = () => {
            setManualActive(false)
            if (inHero) {
                setActiveSection('')
                return
            }
            const id = computeActiveSectionFromViewport()
            if (id) setActiveSection(id)
        }
        window.addEventListener('nav:syncActiveSection', sync)
        return () => window.removeEventListener('nav:syncActiveSection', sync)
    }, [inHero])

    return (
        <header className={isSticky
            ? "fixed inset-x-0 top-0 z-50 backdrop-blur bg-gradient-to-t from-slate-800/80 to-sky-950/80 ring-1 ring-white/10 border-b border-sky-900/50"
            : "absolute inset-x-0 top-0 z-50"}>
            <div className="mx-auto max-w-7xl">
                <div className={isSticky ? "px-6 py-4 lg:px-8" : "px-6 pt-6 lg:max-w-2xl lg:pr-0 lg:pl-8"}>
                    <nav aria-label="Global" className={isSticky ? "grid grid-cols-3 items-center" : "flex items-center justify-between lg:justify-start"}>
                        <button
                            type="button"
                            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                            className={isSticky
                                ? "-m-1.5 p-1.5 col-start-1 lg:justify-self-start"
                                : "-m-1.5 p-1.5 lg:justify-self-start"}
                        >
                            <span className="sr-only">My New Portfolio</span>
                            <img
                                alt="Logo"
                                src={Logo}
                                loading="lazy"
                                decoding="async"
                                fetchPriority="high"
                                className="h-12 sm:h-14 lg:h-14 w-auto lg:p-1.5 lg:bg-white/10 lg:rounded-lg lg:ring-1 lg:ring-white/10 lg:shadow-xl lg:hover:ring-white/20 lg:hover:bg-white/20" />
                        </button>
                        {/* mobile menu button */}
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className={isSticky ? "-m-2.5 rounded-lg p-2.5 text-gray-200 lg:hidden col-start-3 justify-self-end" : "-m-2.5 rounded-lg p-2.5 text-gray-200 lg:hidden"}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-8" />
                        </button>
                        {/* desktop menus */}
                        <div className={isSticky ? "hidden lg:flex lg:gap-x-14 justify-center col-start-2" : "hidden lg:ml-12 lg:flex lg:gap-x-14"}>
                            {navigation.map((item) => (
                                <button
                                    type="button"
                                    key={item.name}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        if (item.name === 'Profile') {
                                            window.dispatchEvent(new Event('profile:open'))
                                        } else {
                                            scrollToSection(item.href)
                                        }
                                    }}
                                    className={`text-base font-semibold ${isActive(item.href) ? 'text-sky-600' : 'text-white hover:text-sky-700'} ${item.name === 'Get in Touch' ? 'whitespace-nowrap' : ''}`}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </nav>
                </div>
            </div>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-t from-slate-800 to-sky-950 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="-m-1.5 p-1.5">
                            <span className="sr-only">My New Portfolio</span>
                            <img
                                alt="Logo"
                                src={Logo}
                                loading="lazy"
                                decoding="async"
                                fetchPriority="high"
                                className="h-12 w-auto"
                            />
                        </button>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-lg p-2.5 text-gray-200"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-8" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-white/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <button
                                        type="button"
                                        key={item.name}
                                        onClick={() => {
                                            setMobileMenuOpen(false)
                                            if (item.name === 'Profile') {
                                                window.dispatchEvent(new Event('profile:open'))
                                            } else {
                                                scrollToSection(item.href)
                                            }
                                        }}
                                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold ${isActive(item.href) ? 'text-sky-600' : 'text-white'} ${item.name === 'Get in Touch' ? 'whitespace-nowrap' : ''}`}
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
