import { useState } from 'react'
import { TodoList } from '../components/TodoList/TodoList'
import { Mypage } from '../components/Mypage/Mypage'
import { css, styled } from 'styled-components'

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
