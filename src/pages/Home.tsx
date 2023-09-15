import { useState } from 'react'
import Aurora from '../components/Aurora'
import Header from '../components/Header'
import Login from '../components/Login'
import { StickyButton } from '../styles/StickyButton.style'
import { TodoList } from '../components/TodoList'

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
