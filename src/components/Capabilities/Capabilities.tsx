import { SiHtml5, SiCss3, SiJavascript, SiMysql, SiWordpress, SiTailwindcss, SiReact, SiTypescript } from 'react-icons/si'

export default function Capabilities() {
  return (
    <div className="bg-gradient-to-b from-slate-800 to-sky-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-12 sm:px-10 lg:px-8">
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 md:grid-cols-3">
          <div className="bg-white/5 px-6 lg:px-8 flex items-center justify-center rounded-lg shadow-xl h-32 sm:h-40">
            <SiHtml5 size={68} className="text-[#E34F26]" aria-label="HTML" />
          </div>
          <div className="bg-white/5 px-6 lg:px-8 flex items-center justify-center rounded-lg shadow-xl h-32 sm:h-40">
            <SiCss3 size={68} className="text-[#1572B6]" aria-label="CSS" />
          </div>
          <div className="bg-white/5 px-6 lg:px-8 flex items-center justify-center rounded-lg shadow-xl h-32 sm:h-40">
            <SiJavascript size={68} className="text-[#F7DF1E]" aria-label="JavaScript" />
          </div>
          <div className="bg-white/5 px-6 lg:px-8 flex items-center justify-center rounded-lg shadow-xl h-32 sm:h-40">
            <SiReact size={68} className="text-[#61DAFB]" aria-label="React" />
          </div>
          <div className="bg-white/5 px-6 lg:px-8 flex items-center justify-center rounded-lg shadow-xl h-32 sm:h-40">
            <SiTypescript size={68} className="text-[#3178C6]" aria-label="TypeScript" />
          </div>
          <div className="bg-white/5 px-6 lg:px-8 flex items-center justify-center rounded-lg shadow-xl h-32 sm:h-40">
            <SiTailwindcss size={68} className="text-[#06B6D4]" aria-label="TailwindCSS" />
          </div>
          <div className="bg-white/5 px-6 lg:px-8 flex items-center justify-center rounded-lg shadow-xl h-32 sm:h-40">
            <SiWordpress size={68} className="text-[#00749C]" aria-label="WordPress" />
          </div>
          <div className="bg-white/5 px-6 lg:px-8 flex items-center justify-center rounded-lg shadow-xl h-32 sm:h-40">
            <SiMysql size={78} className="text-[#00758F]" aria-label="MySQL" />
          </div>
        </div>
      </div>
    </div>
  )
}