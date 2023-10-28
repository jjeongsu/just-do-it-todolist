import { Link } from 'react-router-dom'
import * as S from '../../styles/home.style'
import { useContext, useEffect } from 'react'
import { IUser, UserContext } from '../../config/AuthProvider'
import { useSelector } from 'react-redux'
import { getUserData } from '../../config/firebase.user'

function Header() {
  const user = useSelector((state: any) => state.user)
  console.log('리덕스의 user', user)
  return (
    <>
      <Link to="/">
        <S.Header>
          {user ? <span>{user.userName} </span> : null}
          Just do it!
        </S.Header>
      </Link>
    </>
  )
}
export default Header
