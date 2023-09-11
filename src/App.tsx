import { GlobalStyle } from './styles/global-style'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './styles/theme'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
