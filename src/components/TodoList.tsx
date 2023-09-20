import moment from 'moment'
import * as S from '../styles/TodoList.style'
import CreateTodo, { ICreateTodo } from './CreateTodo'
import { useState } from 'react'
import { styled } from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '..'
import { useDispatch } from 'react-redux'

import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

export function TodoList() {
  const dayOfWeek = moment().format('dddd')
  const dateOfMonth = moment().format('MMMM Do')
  const [isInputOpen, setIsInputOpen] = useState<boolean>(false)
  const todos = useSelector((state: RootState) => state!.todos)

  async function getDB() {
    // 'posts' 컬렉션의 모든 문서들을 가져옴
    const querySnapshot = await getDocs(collection(db, 'accounts'))
    querySnapshot.forEach(doc => {
      // 가져온 모든 문서들을 확인
      console.log(doc.id, ' => ', doc.data())
    })
  }
  getDB()
  return (
    <>
      <S.Wrapper>
        <S.TodoListHeader>
          <S.Button> {'<'} prev </S.Button>
          <S.TodoListDate>
            <span className="day">{dayOfWeek.toUpperCase()} ,</span>
            <span className="date">{dateOfMonth}</span>
          </S.TodoListDate>
          <S.Button> next {'>'} </S.Button>
        </S.TodoListHeader>

        <S.TodoListContent>
          <ul>
            {todos.map(el => (
              <TodoElem {...el} />
            ))}
          </ul>
        </S.TodoListContent>

        <S.TodoListFooter>
          {todos.length} tasks
          <S.AddButton
            isOpen={isInputOpen}
            onClick={() => setIsInputOpen(!isInputOpen)}
          >
            ADD NEW +{' '}
          </S.AddButton>
          <CreateTodo isOpen={isInputOpen} />
        </S.TodoListFooter>
      </S.Wrapper>
    </>
  )
}

const TodoElem = (props: any) => {
  const dispatch = useDispatch()
  const task_state = props.task_state
  const task_name = props.task_name
  const id = props.id
  console.log('task_state', task_state, typeof task_state)
  const handleClick = (e: any) => {
    const { id } = e.currentTarget
    console.log('e.target.value', e.currentTarget)
    console.log(id)
    dispatch({ type: 'CHANGE_STATE', id: id })
  }
  return (
    <ElemLi id={id} task_state={task_state} onClick={handleClick}>
      <div> ㅁ </div>
      <span>{task_name}</span>
    </ElemLi>
  )
}

//task_state이 정확하게 "DONE"이나 "TODO" 둘중 하나라고 명확하게 타입을 지정할 순 없나?
const ElemLi = styled.li<{ task_state: string }>`
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.accentColor};
  font-weight: 600;
  font-size: 18px;
  list-style: none;
  display: flex;
  margin: 5px 10px;
  width: inherit;
  height: 50px;
  align-items: center;
  span {
    text-decoration: ${props =>
      props.task_state == 'DONE' ? 'line-through' : 'none'};
    display: inline-block;
    margin-left: 20px;
    color: ${props => (props.task_state == 'DONE' ? '#b69ffc' : 'none')};
  }
  div {
    margin-left: 10px;
  }
`
