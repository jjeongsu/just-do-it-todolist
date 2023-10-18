import React, { useEffect, useState } from 'react'
import { IoIosRemoveCircleOutline } from 'react-icons/io'
import { BsFillPencilFill } from 'react-icons/bs'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import {
  RiCheckboxBlankCircleFill,
  RiCheckboxBlankCircleLine,
} from 'react-icons/ri'
import * as S from '../../styles/TodoList.style'
//컴포넌트 최적화를 위해 REACT.memeo를 사용
const TodoItem = React.memo(function TodoItem({
  todo,
  onToggle,
  onDelete,
  onUpdate,
}: {
  todo: any
  onToggle: any
  onDelete: any
  onUpdate: any
}) {
  const [isUpdate, setIsUpdate] = useState(false)
  const [text, setText] = useState(todo.text)
  const onSubmit = (e: any) => {
    e.preventDefault()
    onUpdate(todo.id, text)
    setIsUpdate(false)
  }
  const handleUpdateClick = () => {
    setIsUpdate(true)
  }
  console.log('TodoItem 랜더링~~~')
  return (
    <S.Item>
      {isUpdate ? (
        <input
          placeholder={todo.text}
          value={text}
          onChange={e => {
            setText(e.target.value)
          }}
        />
      ) : (
        <li
          onClick={() => {
            onToggle(todo.id)
          }}
        >
          {todo.done ? (
            <RiCheckboxBlankCircleFill className="todo-icon check-icon" />
          ) : (
            <RiCheckboxBlankCircleLine className="todo-icon check-icon" />
          )}

          <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
        </li>
      )}
      <div>
        <button
          onClick={() => {
            onDelete(todo.id)
          }}
        >
          <IoIosRemoveCircleOutline className="todo-icon" />
        </button>
        {isUpdate ? (
          <button onClick={onSubmit}>
            <AiOutlineCheckCircle className="todo-icon" />
          </button>
        ) : (
          <button onClick={handleUpdateClick}>
            <BsFillPencilFill className="todo-icon" />
          </button>
        )}
      </div>
    </S.Item>
  )
})

const TodoList = React.memo(function TodoList({
  todos,
  onToggle,
  onDelete,
  onUpdate,
}: {
  todos: any
  onToggle: any
  onDelete: any
  onUpdate: any
}) {
  return (
    <ul>
      {todos.map((todo: any) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        )
      })}
    </ul>
  )
})

function Todos({
  todos,
  onToggle,
  onDelete,
  onUpdate,
}: {
  todos: any

  onToggle: any
  onDelete: any
  onUpdate: any
}) {
  return (
    <S.TodoListContent>
      <TodoList
        todos={todos}
        onToggle={onToggle}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
    </S.TodoListContent>
  )
}

export default Todos
