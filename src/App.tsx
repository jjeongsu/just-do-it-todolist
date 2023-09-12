import { GlobalStyle } from './styles/global-style'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './styles/theme'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Aurora from './components/Aurora'
import { LogIn } from './pages/Login'

import {
  StickyButton,
  StickyButtonBase,
  StickyButtonHidden,
} from './components/Sticky'
function App() {
  return (
    <>
      <Header />
      <Aurora />
      <StickyButton>
        <StickyButtonBase>open</StickyButtonBase>
        <StickyButtonHidden>
          <Link to={'/login'}> Login</Link>
        </StickyButtonHidden>
      </StickyButton>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  )
}

export default App
