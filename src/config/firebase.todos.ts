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
import { ITodo } from '../modules/todos'
//Create
const todoCollections = collection(db, 'todos')

export const readFirebaseTodo = async (userIdx: string, date: string) => {
  const todosOfDayRef = collection(db, 'todos', userIdx, `${date}`)
  const q = query(todosOfDayRef)

  try {
    const rawdata = await (await getDocs(q)).docs
    if (rawdata) {
      let todos: DocumentData[] = []
      rawdata.forEach(e => todos.push(e.data()))
      return todos
    }
  } catch (err) {
    console.log(err)
  }
}

export const addFirebaseTodo = async (
  userIdx: string,
  date: string,
  todo: any
) => {
  const todoRef = doc(collection(db, 'todos', userIdx, `${date}`))
  await setDoc(todoRef, todo)
}
