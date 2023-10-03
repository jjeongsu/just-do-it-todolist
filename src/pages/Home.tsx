import { useContext, useState } from 'react'
import Aurora from '../components/Aurora'
import Header from '../components/Header'
import Login from '../components/User/Login'
import { StickyButton } from '../styles/StickyButton.style'
import { TodoList } from '../components/Feature/TodoList'
import { UserContext } from '../config/AuthProvider'

function Home() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
      }}
    >
      <TodoList />
    </div>
  )
}
export default Home
