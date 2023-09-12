import { useState } from 'react'
import { loginEmail, signupEmail } from '../firebase'
import * as S from '../styles/home.style'
import { useNavigate } from 'react-router-dom'
function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errMessage, setErrMessage] = useState<string>('')
  let navigate = useNavigate()
  const loginSuccess = (email: string | null, uid: string) => {
    console.log('로그인 성공', uid)
    setEmail('')
    setPassword('')
    navigate('/')
  }
  const handleLoginClick = () => {
    loginEmail(email, password)
      .then(result => {
        console.log(result)
        const user = result.user
        loginSuccess(user.email, user.uid)
      })
      .catch(err => {
        switch (err.code) {
          case 'auth/invalid-email':
            setErrMessage('잘못된 이메일 주소입니다.')
            break
          case 'auth/wrong-password':
            setErrMessage('비밀번호를 잘못 입력하셨습니다.')
            break
        }
      })
  }
  const handleSignupClick = () => {
    signupEmail(email, password)
      .then(result => {
        console.log(result)
        const user = result.user
        loginSuccess(user.email, user.uid)
      })
      .catch(err => {
        //console.log(err.code);
        switch (err.code) {
          case 'auth/weak-password':
            setErrMessage('비밀번호는 6자리 이상이어야 합니다')
            break
          case 'auth/invalid-email':
            setErrMessage('잘못된 이메일 주소입니다')
            break
          case 'auth/email-already-in-use':
            setErrMessage('이미 가입되어 있는 계정입니다')
            break
        }
      })
  }

  console.log('현재의 에러메세지', errMessage)
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
      {errMessage !== '' ? (
        <span style={{ color: 'red' }}>{errMessage}</span>
      ) : null}
      <S.ButtonBox>
        <S.Button onClick={handleLoginClick}>로그인</S.Button>
        <S.Button onClick={handleSignupClick}>회원가입</S.Button>
      </S.ButtonBox>
    </S.Wrapper>
  )
}
export default Login
