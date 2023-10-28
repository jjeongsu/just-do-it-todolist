import { useCallback, useContext, useState } from 'react'
import { loginEmail, signupEmail, auth, db } from '../../config/firebase'
import * as S from '../../styles/home.style'
import { Link, useNavigate } from 'react-router-dom'
import { browserLocalPersistence, setPersistence } from 'firebase/auth'
import { GoogleLogin } from './GoogleLogin'
import { useForm } from 'react-hook-form'
import { addUserInfo } from '../../modules/user'
import { useDispatch } from 'react-redux'

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
  } = useForm<IFormData>()
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const onAddUser = useCallback(
    async (userIdx: string) => dispatch(await addUserInfo(userIdx)),
    [dispatch]
  )
  const handleLoginClick = (email: string, password: string) => {
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        return loginEmail(email, password)
      })
      .then(async result => {
        onAddUser(result.user.uid)
        navigate('/')
      })
      .catch(err => {
        console.log('로그인 에러', err)
      })
  }
  const onValid = (data: any) => {
    const email = data.email
    const password = data.password
    handleLoginClick(email, password)
  }
  console.log('로그인 페이지 리랜더링~~')
  return (
    <S.Wrapper>
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
        <S.ButtonBox>
          <S.Button type="submit">로그인</S.Button>
        </S.ButtonBox>
      </form>
      <GoogleLogin />
      <div>
        아직 회원이 아닌가요?
        <Link to="/signup"> 회원가입하러 가기</Link>
      </div>
    </S.Wrapper>
  )
}
export default Login
