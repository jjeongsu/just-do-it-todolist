import { useState } from 'react'
import { loginEmail, signupEmail, auth } from '../config/firebase'
import * as S from '../styles/home.style'
import { Link, useNavigate } from 'react-router-dom'
import {
  GoogleAuthProvider,
  browserLocalPersistence,
  setPersistence,
} from 'firebase/auth'
import { GoogleLogin } from './GoogleLogin'
function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errMessage, setErrMessage] = useState<string>('')
  const [userData, setUserData] = useState('')
  let navigate = useNavigate()
  const loginSuccess = (email: string | null, uid: string) => {
    console.log('로그인 성공', uid)
    setEmail('')
    setPassword('')
    navigate('/')
  }
  const handleLoginClick = () => {
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        return loginEmail(email, password)
      })
      .then(result => {
        console.log(result)
        navigate('/')
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
      </S.ButtonBox>
      <GoogleLogin />
      <div>
        아직 회원이 아닌가요?
        <Link to="/signup"> 회원가입하러 가기</Link>
      </div>
    </S.Wrapper>
  )
}
export default Login
