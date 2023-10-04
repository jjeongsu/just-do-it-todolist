import * as S from '../../styles/TodoList.style'
import SpeechRecog from '../SpeechRecog'
import TodosContainer from './TodosContainer'
import { TodosFooter } from './TodosFooter'
import { TodosHeader } from './TodosHeader'
export function TodoList() {
  return (
    <>
      <S.Wrapper>
        <TodosHeader />
        <TodosContainer />
        <TodosFooter />
      </S.Wrapper>
    </>
  )
}
