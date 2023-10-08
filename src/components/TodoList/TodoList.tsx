import { useMemo, useState } from 'react'
import * as S from '../../styles/TodoList.style'
import SpeechRecog from '../Speech/SpeechRecog'
import TodosContainer from './TodosContainer'
import { TodosFooter } from './TodosFooter'
import { TodosHeader } from './TodosHeader'
import dayjs from 'dayjs'
export function TodoList() {
  const now = dayjs() //디폴트로 오늘날짜
  const [currentDate, setCurrentDate] = useState<dayjs.Dayjs>(now)

  return (
    <>
      <S.Wrapper>
        <TodosHeader
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />
        <TodosContainer
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />
        <TodosFooter />
      </S.Wrapper>
    </>
  )
}

export interface IDateProps {
  currentDate: dayjs.Dayjs
  setCurrentDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>
}
