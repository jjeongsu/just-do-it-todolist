import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Todos from './Todos'
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  updateTodo,
  ITodo,
} from '../../modules/todos'
import { IDateProps } from './TodoList'
import dayjs from 'dayjs'

function TodosContainer({ currentDate }: IDateProps) {
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
