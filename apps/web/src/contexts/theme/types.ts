export interface ThemeColors {
  primary: string
  secondary: string
  background: string
  surface: string
  text: {
    primary: string
    secondary: string
    inverse: string
  }
  border: string
}

export interface Theme {
  colors: ThemeColors
}

export const lightTheme: Theme = {
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
  },
}

export const darkTheme: Theme = {
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
  },
}
