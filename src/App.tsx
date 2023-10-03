import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Aurora from './components/Aurora'
import { LogIn } from './pages/Login'
import {
  StickyButton,
  StickyButtonBase,
  StickyButtonHidden,
} from './components/Sticky'
import Signup from './components/User/Signup'
import React, { useContext, useEffect, useState } from 'react'
import { AuthProvider, UserContext } from './config/AuthProvider'
import { auth } from './config/firebase'
import { signOut } from 'firebase/auth'

function App() {
  const { isLogin, setIsLogin, setUser } = useContext(UserContext)
  const navigate = useNavigate()
  const handleLogOut = () => {
    signOut(auth)
      .then(res => {
        console.log('로그아웃 성공')
        setIsLogin(false)
        setUser({})
        navigate('/')
      })
      .catch(err => console.log('로그아웃 실패', err))
  }
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      //console.log(user)
      if (user) {
        setIsLogin(true)
        console.log('로그인된 상태입니다.')
      } else {
        setIsLogin(false)
        console.log('로그아웃된 상태 입니다.')
      }
    })
  }, [])
  return (
    <>
      <Header />
      <Aurora />
      <StickyButton>
        <StickyButtonBase>open</StickyButtonBase>
        {isLogin === false ? (
          <StickyButtonHidden>
            <Link to={'/login'}> Login</Link>
          </StickyButtonHidden>
        ) : (
          <StickyButtonHidden>
            <button onClick={handleLogOut}>로그아웃</button>
          </StickyButtonHidden>
        )}
      </StickyButton>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
