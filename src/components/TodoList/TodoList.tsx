import { useContext, useEffect, useMemo, useState } from 'react'
import * as S from '../../styles/TodoList.style'
import SpeechRecog from '../Speech/SpeechRecog'
import TodosContainer from './TodosContainer'
import { TodosFooter } from './TodosFooter'
import { TodosHeader } from './TodosHeader'
import dayjs from 'dayjs'
import { UserContext } from '../../config/AuthProvider'
import { readFirebaseTodo } from '../../config/firebase.todos'
export function TodoList() {
  const now = dayjs() //디폴트로 오늘날짜, dayJs 객체
  const [currentDateStr, setCurrentDateStr] = useState<string>(
    now.format('YYYY-MM-DD').toString()
  )
  const [currentDate, setCurrentDate] = useState<dayjs.Dayjs>(now)

  useEffect(() => {
    setCurrentDateStr(currentDate.format('YYYY-MM-DD').toString())
  }, [currentDate])
  console.log('currentDateStr', currentDateStr)
  return (
    <>
      <S.Wrapper>
        <TodosHeader
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />
        <TodosContainer currentDateStr={currentDateStr} />
        <TodosFooter currentDateStr={currentDateStr} />
      </S.Wrapper>
    </>
  )
}

export interface IDateProps {
  currentDate: dayjs.Dayjs
  setCurrentDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>
}
