import moment from 'moment'
import dayjs from 'dayjs'
import * as S from '../../styles/TodoList.style'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import { IDateProps } from './TodoList'
export function TodosHeader({ currentDate, setCurrentDate }: IDateProps) {
  const dayOfWeek = currentDate.format('dddd')
  const dateOfMonth = currentDate.format('MMMM D') + 'th'

  const handlePrevButton = () => {
    //전날 버튼을 눌렀을 때
    setCurrentDate(prev => prev.subtract(1, 'day'))
  }
  const handleNextButton = () => {
    //다음날 버튼을 눌렀을 때
    setCurrentDate(prev => prev.add(1, 'day'))
  }

  return (
    <S.TodoListHeader>
      <S.Button onClick={handlePrevButton}>
        {' '}
        <BiLeftArrowAlt className="arrow-icon" /> prev{' '}
      </S.Button>
      <S.TodoListDate>
        <span className="day">{dayOfWeek.toUpperCase()} ,</span>
        <span className="date">{dateOfMonth}</span>
      </S.TodoListDate>
      <S.Button onClick={handleNextButton}>
        {' '}
        next <BiRightArrowAlt className="arrow-icon" />{' '}
      </S.Button>
    </S.TodoListHeader>
  )
}
