import moment from 'moment'
import * as S from '../../styles/TodoList.style'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
export function TodosHeader() {
  const dayOfWeek = moment().format('dddd')
  const dateOfMonth = moment().format('MMMM Do')
  return (
    <S.TodoListHeader>
      <S.Button>
        {' '}
        <BiLeftArrowAlt className="arrow-icon" /> prev{' '}
      </S.Button>
      <S.TodoListDate>
        <span className="day">{dayOfWeek.toUpperCase()} ,</span>
        <span className="date">{dateOfMonth}</span>
      </S.TodoListDate>
      <S.Button>
        {' '}
        next <BiRightArrowAlt className="arrow-icon" />{' '}
      </S.Button>
    </S.TodoListHeader>
  )
}
