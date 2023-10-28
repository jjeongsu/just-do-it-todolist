import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/DefaultUI/Header'
import Aurora from './components/DefaultUI/Aurora'
import { LogIn } from './pages/Login'
import {
  StickyButton,
  StickyButtonBase,
  StickyButtonHidden,
} from './components/DefaultUI/Sticky'
import Signup from './components/Auth/Signup'
import React, { useContext, useEffect, useState } from 'react'
import { AuthProvider, UserContext } from './config/AuthProvider'
import { auth } from './config/firebase'
import { signOut } from 'firebase/auth'

import { Mypage } from './components/Mypage/Mypage'
import PublicRoute from './pages/PublicRoute'
import PrivateRoute from './pages/Privateroute'
import { useDispatch } from 'react-redux'
import { deleteUserInfo } from './modules/user'
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector((state: any) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogOut = () => {
    signOut(auth)
      .then(res => {
        console.log('로그아웃 성공')
        dispatch(deleteUserInfo())
        navigate('/')
      })
      .catch(err => console.log('로그아웃 실패', err))
  }
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      //console.log(user)
      if (user) {
        console.log('로그인된 상태입니다.')
      } else {
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
        {user.userIdx === '' ? (
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
        <Route element={<PrivateRoute />}>
          <Route path="/mypage" element={<Mypage />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
