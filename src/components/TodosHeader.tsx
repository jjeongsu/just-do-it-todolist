import moment from 'moment'
import * as S from '../styles/TodoList.style'

export function TodosHeader() {
  const dayOfWeek = moment().format('dddd')
  const dateOfMonth = moment().format('MMMM Do')
  return (
    <S.TodoListHeader>
      <S.Button> {'<'} prev </S.Button>
      <S.TodoListDate>
        <span className="day">{dayOfWeek.toUpperCase()} ,</span>
        <span className="date">{dateOfMonth}</span>
      </S.TodoListDate>
      <S.Button> next {'>'} </S.Button>
    </S.TodoListHeader>
  )
}
