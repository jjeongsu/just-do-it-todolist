import { useState } from 'react'
import { TodoList } from '../components/TodoList/TodoList'
import { Mypage } from '../components/Mypage/Mypage'
import { css, styled } from 'styled-components'

function Home() {
  const [isTodo, setIsTodo] = useState<boolean>(true)
  const onMoveClick = () => {
    setIsTodo(prev => !prev)
  }
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
      }}
    >
      {isTodo ? <TodoList /> : <Mypage />}
      <MoveBtn onClick={onMoveClick} isTodo={isTodo}>
        이동
      </MoveBtn>
    </div>
  )
}
export default Home

const MoveBtn = styled.button<{ isTodo: boolean }>`
  position: fixed;

  ${props =>
    props.isTodo
      ? css`
          right: 5%;
        `
      : css`
          left: 5%;
        `}
`
