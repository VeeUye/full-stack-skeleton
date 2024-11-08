import { useTheme } from '@/hooks/useTheme'
import styles from './styles.module.scss'

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`${styles.toggle} ${isDark && styles.dark}`}
      data-testid="theme-toggle"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className={styles.slider}>
        <span className={styles.icon}>{isDark ? '🌙' : '☀️'}</span>
      </div>
    </button>
  )
}
