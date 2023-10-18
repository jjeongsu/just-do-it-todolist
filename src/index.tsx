import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global-style'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './styles/theme'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './modules'
import { AuthProvider } from './config/AuthProvider'
import { composeWithDevTools } from 'redux-devtools-extension' // 리덕스 개발자 도구
import { strictEqual } from 'assert'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const store = createStore(rootReducer, composeWithDevTools())

export type RootState = ReturnType<typeof store.getState>
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={lightTheme}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
)

reportWebVitals()
