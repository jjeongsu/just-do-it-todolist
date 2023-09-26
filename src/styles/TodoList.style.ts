import { styled } from 'styled-components'
import { ICreateTodo } from '../components/CreateTodo'

export const Wrapper = styled.div`
  width: 30rem;
  height: 45rem;
  background-color: ${({ theme }) => theme.bgColor};
  filter: drop-shadow(14px 11px 19px #383838);
  display: flex;
  flex-direction: column;
`
export const TodoListHeader = styled.div`
  width: inherit;
  height: 5rem;
  display: flex;
  flex-direction: row;
  padding: 20px 15px;
  border-bottom: 0.01px solid ${({ theme }) => theme.accentColor};
`
export const TodoListContent = styled.div`
  flex: 1;
  ul {
    padding-left: 0;
  }
`
export const TodoListFooter = styled.div`
  width: inherit;
  height: 5rem;
  padding: 20px 15px;
  border-top: 0.01px solid ${({ theme }) => theme.accentColor};
  color: ${({ theme }) => theme.accentColor};
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const TodoListDate = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.accentColor};
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  .day {
    font-weight: 600;
    font-size: 25px;
    margin-right: 10px;
  }
  .date {
    font-weight: 500;
    font-size: 18px;
  }
`
export const Button = styled.button`
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.accentColor};
`
export const AddButton = styled.button<ICreateTodo>`
  display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
  font-family: 'Montserrat', sans-serif;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.accentColor};
  font-weight: 600;
`

export const Item = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.accentColor};
  font-weight: 600;
  font-size: 18px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 5px 30px;
  width: inherit;
  height: 50px;
  align-items: center;
  span {
    display: inline-block;
  }
  div {
    margin-left: 10px;
  }
  button {
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.accentColor};
    font-weight: 300;
    margin: 0px 10px;
  }
  input {
    border: none;
  }
`
