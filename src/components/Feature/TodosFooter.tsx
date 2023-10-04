import * as S from '../../styles/TodoList.style'
import { useSelector } from 'react-redux'
import { RootState } from '../..'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addTodo } from '../../modules/todos'
import CreateTodo from './CreateTodo'
import SpeechRecog from '../SpeechRecog'
import SpeechGuide from '../SpeechGuide'
export function TodosFooter() {
  const [isInputOpen, setIsInputOpen] = useState<boolean>(false)
  const todos = useSelector((state: RootState) => state!.todos)
  const dispatch = useDispatch()
  const onCreate = (text: string) => dispatch(addTodo(text))
  return (
    <>
      {isInputOpen ? <SpeechGuide /> : null}
      {isInputOpen ? <SpeechRecog /> : null}
      <S.TodoListFooter>
        {todos.length} tasks
        <S.AddButton
          isOpen={isInputOpen}
          onClick={() => setIsInputOpen(!isInputOpen)}
        >
          ADD NEW +{' '}
        </S.AddButton>
        <CreateTodo isOpen={isInputOpen} onCreate={onCreate} />
      </S.TodoListFooter>
    </>
  )
}
