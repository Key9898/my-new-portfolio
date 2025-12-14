import { GiTeamIdea } from "react-icons/gi"
const Logo = '/Logo/logo.svg'
import { type Post, type ButtonData } from '../../data/projects'

interface ShowcaseCardProps {
    post: Post
}

export default function ShowcaseCard({ post }: ShowcaseCardProps) {
    return (
        <article className="relative isolate flex flex-col gap-8 lg:flex-row">
            <div className="relative w-full lg:w-80 lg:shrink-0">
                {/* Mobile Image */}
                <img
                    alt={post.imageAlt}
                    src={post.image.mobile}
                    loading="lazy"
                    decoding="async"
                    className="block sm:hidden w-full h-auto rounded-lg shadow-xl bg-gray-800 object-cover aspect-video"
                />
                {/* Tablet Image */}
                <img
                    alt={post.imageAlt}
                    src={post.image.tablet}
                    loading="lazy"
                    decoding="async"
                    className="hidden sm:block lg:hidden w-full h-auto rounded-lg shadow-xl bg-gray-800 object-cover aspect-video"
                />
                {/* Desktop Image */}
                <img
                    alt={post.imageAlt}
                    src={post.image.desktop}
                    loading="lazy"
                    decoding="async"
                    className="hidden lg:block size-full rounded-lg shadow-xl bg-gray-800 object-cover aspect-square"
                />
                <div className="absolute inset-0 rounded-lg shadow-xl ring-1 ring-white/10 pointer-events-none" />
            </div>
            <div>
                <div className="flex items-center gap-x-4 text-base">
                    <time dateTime={post.date} className="text-gray-400">
                        {post.date}
                    </time>
                    <span
                        className="relative z-10 rounded-lg shadow-xl bg-sky-200/20 px-3 py-1.5 font-medium text-base text-gray-300 hover:bg-sky-800"
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
    )
}
