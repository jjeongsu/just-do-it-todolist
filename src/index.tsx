import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global-style'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './styles/theme'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>
)

reportWebVitals()
