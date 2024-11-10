import { useTheme } from './hooks/useTheme'
import { ThemeToggle } from './components/atoms/ThemeToggle'
import styles from './App.module.scss'

const App = () => {
  const { theme } = useTheme()

  return (
    <div
      data-testid="app-root"
      className={styles.app}
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text.primary,
      }}
    >
      <header className={styles.header}>
        <ThemeToggle />
      </header>
      <main className={styles.main}>
        <h1>My awesome app</h1>
      </main>
    </div>
  )
}

export default App
