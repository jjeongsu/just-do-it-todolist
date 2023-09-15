import React, { SetStateAction, useState } from 'react'
import { styled } from 'styled-components'
export interface ICreateTodo {
  isOpen: boolean
}
export default function CreateTodo({ isOpen }: ICreateTodo) {
  const [todo, setTodo] = useState<string>('')
  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('form을 통해 전달될 event', todo)
    //어떤 일을 수행하고

    setTodo('')
  }
  return (
    <Wrapper isOpen={isOpen}>
      <form onSubmit={handleSubmit}>
        <TodoInput
          type="text"
          onChange={(e: any) => setTodo(e.target.value)}
          value={todo}
          placeholder="오늘 할일을 작성하세요"
        />
        <button type="submit">ADD</button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div<ICreateTodo>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  button {
    margin-left: 18px;
    border: none;
    background: none;
    color: ${({ theme }) => theme.accentColor};
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
  }
`
const TodoInput = styled.input`
  border: 1px solid ${({ theme }) => theme.accentColor};
  padding: 5px 20px;
  width: 200px;
  height: 40px;
  border-radius: 20px;
  outline: none;
  &:hover,
  :focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.accentColor};
    background-color: aliceblue;
  }
`
