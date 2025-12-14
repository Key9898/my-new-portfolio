import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Label } from 'recharts'
import { useEffect, useRef, useState } from 'react'

const data = [
  { name: 'HTML', value: 100 },
  { name: 'CSS', value: 95 },
  { name: 'JavaScript', value: 80 },
  { name: 'MySQL', value: 75 },
  { name: 'WordPress', value: 95 },
  { name: 'Tailwind CSS', value: 85 },
  { name: 'React', value: 70 },
  { name: 'TypeScript', value: 70 },
]

const COLOR_MAP: Record<string, string> = {
  HTML: '#E34F26',
  CSS: '#1572B6',
  JavaScript: '#F7DF1E',
  MySQL: '#00758F',
  WordPress: '#00749C',
  'Tailwind CSS': '#06B6D4',
  TailwindCSS: '#06B6D4', // alias to match any usage
  React: '#61DAFB',
  TypeScript: '#3178C6',
}

// BG_CLASS_MAP (add TailwindCSS alias)
const BG_CLASS_MAP: Record<string, string> = {
  HTML: 'bg-[#E34F26]',
  CSS: 'bg-[#1572B6]',
  JavaScript: 'bg-[#F7DF1E]',
  MySQL: 'bg-[#00758F]',
  WordPress: 'bg-[#00749C]',
  TailwindCSS: 'bg-[#06B6D4]', // alias for legend label without space
  React: 'bg-[#61DAFB]',
  TypeScript: 'bg-[#3178C6]',
}

export default function LanguagesPieChart() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  // Overall proficiency (average of all values)
  const overallProficiency = Math.round(
    data.reduce((sum, d) => sum + d.value, 0) / data.length
  )

  // Center number animation
  const [centerValue, setCenterValue] = useState(0)
  useEffect(() => {
    if (!visible) return
    const duration = 900
    const start = performance.now()
    const target = overallProficiency
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setCenterValue(Math.round(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [visible, overallProficiency])

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative z-10 w-full min-w-0 px-4 pt-0 pb-4 bg-inherit md:-mt-px"
    >
      {visible && (
        <div className="flex flex-col items-center gap-6 justify-center">
          {/* Pie (Top) */}
          <div className="min-w-0 w-56 h-56 sm:w-72 sm:h-72 lg:w-72 lg:h-72">
            <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={95}
                  paddingAngle={0}
                  stroke="none"
                  isAnimationActive={true}
                  animationBegin={0}
                  animationDuration={900}
                  animationEasing="ease-out"
                >
                  {data.map((entry) => (
                    <Cell
                      key={`cell-${entry.name}`}
                      fill={COLOR_MAP[entry.name]}
                      aria-label={`${entry.name}: ${entry.value}`}
                    />
                  ))}
                  <Label
                    value={`${centerValue}%`}
                    position="center"
                    // dx={5}
                    dy={-10}
                    fill="#ffffff"
                    style={{ fontSize: 28, fontWeight: 700 }}
                  />
                  <Label
                    value="Proficiency"
                    position="center"
                    // dx={5}
                    dy={16}
                    fill="#cbd5e1"
                    style={{ fontSize: 12 }}
                  />
                </Pie>
                <Tooltip
                  contentStyle={{ background: 'rgba(17,24,39,0.9)', border: 'none', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend (Bottom, Grid) */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-3">
            {['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'TailwindCSS', 'WordPress', 'MySQL'].map((name) => (
              <div key={name} className="flex items-center gap-2">
                <span className={`inline-block w-3 h-3 rounded-sm ${BG_CLASS_MAP[name]}`} aria-label={`${name} color`} />
                <span className="text-white text-sm">{name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}