//db에서 todolist의 create, read, delete, update 기능제어

import {
  DocumentData,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore'
import { db } from './firebase'
import { useSelector } from 'react-redux'
//Create
const todoCollections = collection(db, 'todos')

export const readFirebaseTodo = async (userIdx: string, date: string) => {
  const todosOfDayRef = collection(db, 'todos', userIdx, `${date}`)
  const q = query(todosOfDayRef)

  const rawdata = await (await getDocs(q)).docs
  let todos: any[] = []
  rawdata.forEach(e => todos.push(e.data()))
  return todos
}

export const addFirebaseTodo = async (
  userIdx: string,
  date: string,
  todo: any
) => {
  const todoRef = doc(collection(db, 'todos', userIdx, `${date}`))
  await setDoc(todoRef, todo)
}
