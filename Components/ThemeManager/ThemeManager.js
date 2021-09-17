import { useTheme } from 'next-themes'

const ThemeManager = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <button onClick={() => setTheme(theme==='dark'?'light' : 'dark')}>Light Mode</button>
    </div>
  )
}

export default ThemeManager