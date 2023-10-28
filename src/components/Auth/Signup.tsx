import { styled } from 'styled-components'
import * as S from '../../styles/home.style'
import { useContext, useState } from 'react'
import { db, signupEmail } from '../../config/firebase'
import { UserContext } from '../../config/AuthProvider'
import { doc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { setUserData } from '../../config/firebase.user'
export default function Signup() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [errMessage, setErrMessage] = useState<string>('')
  const navigate = useNavigate()
  const handleSignupClick = () => {
    signupEmail(email, password)
      .then(async result => {
        console.log('result', result)
        const user = result.user
        const userData = {
          userName: username,
          userEmail: email,
          userIdx: user.uid,
          userPassword: password,
        }
        setUserData(userData)
      })
      .then(() => {
        navigate('/login')
      })
      .catch(err => console.log(err))
  }

  return (
    <Outline>
      <S.Wrapper>
        <S.Title>회원가입</S.Title>
        <S.Input
          placeholder="email"
          onChange={(e: any) => setEmail(e.target.value)}
          value={email}
        />
        <S.Input
          placeholder="비밀번호를 입력하세요"
          onChange={(e: any) => setPassword(e.target.value)}
          value={password}
        />
        <S.Input
          placeholder="닉네임을 입력하세요"
          onChange={(e: any) => setUsername(e.target.value)}
          value={username}
        />
        <S.Button onClick={handleSignupClick}> 회원가입 하기 </S.Button>
      </S.Wrapper>
    </Outline>
  )
}
const Outline = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
