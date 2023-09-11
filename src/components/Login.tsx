import { useState } from 'react'
import { loginEmail, signupEmail } from '../firebase'
import * as S from '../styles/home.style'
function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const loginSuccess = (email: string | null, uid: string) => {
    console.log('로그인 성공', uid)
  }
  const handleLoginClick = () => {
    loginEmail(email, password).then(result => {
      console.log(result)
      const user = result.user
      loginSuccess(user.email, user.uid)
    })
  }
  const handleSignupClick = () => {
    signupEmail(email, password)
      .then(result => {
        console.log(result)
        const user = result.user
        loginSuccess(user.email, user.uid)
      })
      .catch(err => console.log(err))
  }

  return (
    <S.Wrapper>
      <S.Title>로그인</S.Title>
      <S.Input
        placeholder="email"
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
      <S.Input
        placeholder="password"
        onChange={e => setPassword(e.target.value)}
        value={password}
      />
      <S.ButtonBox>
        <S.Button onClick={handleLoginClick}>로그인</S.Button>
        <S.Button onClick={handleSignupClick}>회원가입</S.Button>
      </S.ButtonBox>
    </S.Wrapper>
  )
}
export default Login
