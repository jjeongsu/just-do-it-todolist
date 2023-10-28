import React, { SetStateAction, useContext, useState } from 'react'

import { styled } from 'styled-components'
import { addFirebaseTodo } from '../../config/firebase.todos'
import { UserContext } from '../../config/AuthProvider'
import { useSelector } from 'react-redux'
// import { useSpeechRecognition } from 'react-speech-kit'
export interface ICreateTodo {
  isOpen: boolean
  onCreate?: any
  currentDateStr?: string
}
export default function CreateTodo({
  isOpen,
  onCreate,
  currentDateStr,
}: ICreateTodo) {
  const [text, setText] = useState('')
  const [isDisable, setIsDisable] = useState(true) //할일 추가 버튼 활성화여부 체크
  const user = useSelector((state: any) => state.user)
  const onChange = (e: any) => {
    const value = e.target.value
    setText(value)
    if (value.length > 0) {
      setIsDisable(false)
    } else {
      setIsDisable(true)
    }
    console.log('isDisable', isDisable)
  }
  const onSubmit = (e: any) => {
    e.preventDefault()
    onCreate(text, currentDateStr, user.userIdx)
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
        <button type="submit" disabled={isDisable}>
          ADD
        </button>
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
