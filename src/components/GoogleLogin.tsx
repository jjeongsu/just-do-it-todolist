import {
  GoogleAuthProvider,
  browserLocalPersistence,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'
import { auth } from '../config/firebase'
import { useContext } from 'react'
import { UserContext } from '../config/AuthProvider'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import firebase from 'firebase/app'

export function GoogleLogin() {
  const { setUser, setToken } = useContext(UserContext)
  const navigate = useNavigate()
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider()
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        return signInWithPopup(auth, provider)
      })
      .then(res => {
        const credential = GoogleAuthProvider.credentialFromResult(res)
        console.log('credential', credential)
        console.log('response', res)
        const token = credential?.accessToken
        console.log('token', typeof token)
        const user = {
          userName: res.user.displayName,
          userEmail: res.user.email,
          userIdx: res.user.uid,
        }
        setUser(user)
        if (token) {
          setToken(token)
        }
        navigate('/')
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div>
      <GoogleLoginButton onClick={handleGoogleLogin}>
        <span>Google</span>로 로그인 하기
      </GoogleLoginButton>
    </div>
  )
}

const GoogleLoginButton = styled.button`
  width: 250px;
  height: 40px;
  border: none;
  background-color: #efefef;
  color: ${({ theme }) => theme.darkgray};
  border-radius: 20px;
  &:hover {
    color: black;
    cursor: pointer;
    font-weight: 600;
  }
  span {
    color: ${({ theme }) => theme.textColor};
  }
`
