import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Todos from '../components/Todos'
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  updateTodo,
  ITodo,
} from '../modules/todos'

function TodosContainer() {
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
