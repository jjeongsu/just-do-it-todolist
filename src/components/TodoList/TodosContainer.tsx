import React, { useCallback, useContext, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Todos from './Todos'
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  updateTodo,
  ITodo,
  initTodo,
} from '../../modules/todos'
import { IDateProps } from './TodoList'
import dayjs from 'dayjs'
import { UserContext } from '../../config/AuthProvider'
import { readFirebaseTodo } from '../../config/firebase.todos'

function TodosContainer({ currentDateStr }: { currentDateStr: string }) {
  const user = useSelector((state: any) => state.user.user)
  const userIdx = user.userIdx
  const todos = useSelector((state: any) => state.todos)
  const dispatch = useDispatch()
  const onToggle = useCallback(
    (id: number) => dispatch(toggleTodo(id)),
    [dispatch]
  )
  const onDelete = useCallback(
    (id: number) => dispatch(deleteTodo(id)),
    [dispatch]
  )
  const onUpdate = useCallback(
    (id: number, text: string) => dispatch(updateTodo(id, text)),
    [dispatch]
  )

  const onInit = useCallback(
    async (userIdx: string, currentDateStr: string) =>
      dispatch(await initTodo(userIdx, currentDateStr)),
    [dispatch]
  )
  useEffect(() => {
    if (userIdx) {
      console.log('userIDx 존제재')
      onInit(userIdx, currentDateStr)
    }
  }, [userIdx, currentDateStr])

  console.log('todos', todos)
  return (
    <Todos
      todos={todos}
      onToggle={onToggle}
      onDelete={onDelete}
      onUpdate={onUpdate}
    />
  )
}

export default TodosContainer
