
import React from 'react'
import { Moon, Sun, Monitor } from 'lucide-react'

const Option = ({ active, onClick, children }) => (
  <button
    className={`btn-ghost rounded-lg px-2 py-1 ${active ? 'text-brand-600 dark:text-brand-400' : ''}`}
    onClick={onClick}
  >
    {children}
  </button>
)

export default function ThemeToggle({ theme, setTheme }) {
  return (
    <div className="flex items-center gap-1" title="Theme">
      <Option active={theme==='light'} onClick={() => setTheme('light')}><Sun size={18} /></Option>
      <Option active={theme==='dark'} onClick={() => setTheme('dark')}><Moon size={18} /></Option>
      <Option active={theme==='system'} onClick={() => setTheme('system')}><Monitor size={18} /></Option>
    </div>
  )
}
