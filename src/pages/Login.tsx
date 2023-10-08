import { styled } from 'styled-components'
import Login from '../components/Auth/Login'

export function LogIn() {
  return (
    <Wrapper>
      <Login />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
