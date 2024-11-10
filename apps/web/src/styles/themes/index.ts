export const lightTheme = {
  colors: {
    primary: '#0066cc',
    secondary: '#666666',
    background: '#f5f5f5',
    surface: '#ffffff',
    text: {
      primary: '#333333',
      secondary: '#666666',
      inverse: '#ffffff',
    },
    border: '#cccccc',
    error: '#dc3545',
    success: '#28a745',
    warning: '#ffc107',
    info: '#17a2b8',
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
  },
} as const

export const darkTheme = {
  colors: {
    primary: '#66b3ff',
    secondary: '#999999',
    background: '#1a1a1a',
    surface: '#2d2d2d',
    text: {
      primary: '#ffffff',
      secondary: '#cccccc',
      inverse: '#333333',
    },
    border: '#404040',
    error: '#ff4d4d',
    success: '#4dff4d',
    warning: '#ffff4d',
    info: '#4dffff',
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.2)',
    md: '0 4px 6px rgba(0, 0, 0, 0.3)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.3)',
  },
} as const

export type Theme = typeof lightTheme
export type ThemeColors = typeof lightTheme.colors
