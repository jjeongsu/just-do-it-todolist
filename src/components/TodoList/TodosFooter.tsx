import * as S from '../../styles/TodoList.style'
import { useSelector } from 'react-redux'
import { RootState } from '../..'
import { useDispatch } from 'react-redux'
import { useContext, useState } from 'react'
import { addTodo } from '../../modules/todos'
import CreateTodo from './CreateTodo'
import SpeechRecog from '../Speech/SpeechRecog'
import SpeechGuide from '../Speech/SpeechGuide'
import { UserContext } from '../../config/AuthProvider'
export function TodosFooter({ currentDateStr }: { currentDateStr: string }) {
  const { user } = useContext(UserContext)
  const [isInputOpen, setIsInputOpen] = useState<boolean>(false)
  const todos = useSelector((state: RootState) => state!.todos)
  const dispatch = useDispatch()
  const onCreate = async (
    text: string,
    currentDateStr: string,
    userIdx: string
  ) => dispatch(await addTodo(text, currentDateStr, userIdx))
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
        <CreateTodo
          isOpen={isInputOpen}
          onCreate={onCreate}
          currentDateStr={currentDateStr}
        />
      </S.TodoListFooter>
    </>
  )
}
