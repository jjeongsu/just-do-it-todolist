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
import { useForm } from 'react-hook-form'
import { StringSupportOption } from 'prettier'

interface IFormData {
  errors: {
    email: {
      message: string
    }
    password: {
      message: string
    }
  }
  email: string
  password: string
}

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormData>()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errMessage, setErrMessage] = useState<string>('')
  const [userData, setUserData] = useState('')
  let navigate = useNavigate()

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
  const onValid = (data: any) => {
    console.log('로그인으로 들어온 데이터 ', data)
  }
  console.log('현재의 에러메세지', errMessage)
  return (
    <S.Wrapper>
      {/* <S.Title>로그인</S.Title>
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
      </div> */}
      <form onSubmit={handleSubmit(onValid)}>
        <S.Title>로그인</S.Title>
        <S.Input
          {...register('email', {
            required: '이메일을 입력해주세요',
            pattern: {
              value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/,
              message: '이메일 형식을 맞춰 주세요',
            },
          })}
          placeholder="이메일을 입력해 주세요"
          type="email"
        />
        <p>{errors.email && errors?.email?.message}</p>
        <S.Input
          {...register('password', {
            required: '비밀번호를 입력해주세요',
            minLength: {
              value: 6,
              message: '비밀번호는 최소 6글자 입니다.',
            },
          })}
          placeholder="비밀번호을 입력해 주세요"
          type="password"
        />
        <p>{errors.password && errors?.password?.message}</p>
      </form>
    </S.Wrapper>
  )
}
export default Login
