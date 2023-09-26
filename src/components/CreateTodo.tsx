import React, { SetStateAction, useState } from 'react'
import { useDispatch } from 'react-redux'
import { styled } from 'styled-components'
export interface ICreateTodo {
  isOpen: boolean
  onCreate?: any
}
export default function CreateTodo({ isOpen, onCreate }: ICreateTodo) {
  const [text, setText] = useState('')
  const onChange = (e: any) => {
    setText(e.target.value)
  }
  const onSubmit = (e: any) => {
    e.preventDefault()
    onCreate(text)
    setText('')
  }
  return (
    <Wrapper isOpen={isOpen}>
      <form onSubmit={onSubmit}>
        <TodoInput
          type="text"
          onChange={onChange}
          value={text}
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
