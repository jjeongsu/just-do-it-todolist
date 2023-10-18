import { useContext } from 'react'
import { addFirebaseTodo, readFirebaseTodo } from '../config/firebase.todos'
import { UserContext } from '../config/AuthProvider'

//액션 타입을 선언한다
const ADD_TODO = 'todos/ADD_TODO'
const TOGGLE_TODO = 'todos/TOGGLE_TODO' //투두 <-> done 상태 바꿈
const DELETE_TODO = 'todos/DELETE_TODO'
const UPDATE_TODO = 'todos/UPDATE_TODO' //수정하기
const INIT_TODO = 'todo/INIT_TODO'
//액션 생성함수 선언
let nextId = 1
export const addTodo = async (
  text: string,
  currentDateStr: string,
  userIdx: any
) => {
  //
  const newTodo = {
    id: nextId++,
    text,
  }
  if (userIdx) {
    console.log('userIdx 존재')
    await addFirebaseTodo(userIdx, currentDateStr, newTodo)
  }
  return {
    type: ADD_TODO,
    todo: newTodo,
  }
}
export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  id,
})

export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  id,
})

export const updateTodo = (id: number, text: string) => ({
  type: UPDATE_TODO,
  text,
  id,
})

export const initTodo = async (userIdx: string, date: string) => {
  const todos = await readFirebaseTodo(userIdx, date)
  console.log(todos)
  return {
    type: INIT_TODO,
    init_todo: [...todos],
  }
}
export interface ITodo {
  id: number
  text: string
  done?: boolean
}

//초기상태 선언
//리듀서의 초기상태는 꼭 객체타입일 필요는 없다
//배열 혹은 원시타입(숫자, 문자, boolean,)이여도 상관이 없다
const initialState: ITodo[] = []
/*
  {
    id: 1,
    text:'example',
    done: false
  }
  */

export default function todos(
  state = initialState,
  action: {
    type: any
    todo: ConcatArray<ITodo>
    id: number
    text: any
    init_todo: any
  }
) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo)
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      )
    case DELETE_TODO:
      const targetIndex = state.findIndex(todo => todo.id === action.id)
      return [...state.slice(0, targetIndex), ...state.slice(targetIndex + 1)]
    case UPDATE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      )
    case INIT_TODO:
      return [...state, ...action.init_todo]
    default:
      return state
  }
}
