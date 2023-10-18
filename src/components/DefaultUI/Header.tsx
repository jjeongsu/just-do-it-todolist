import { Link } from 'react-router-dom'
import * as S from '../../styles/home.style'
import { useContext, useEffect } from 'react'
import { IUser, UserContext } from '../../config/AuthProvider'
import { useSelector } from 'react-redux'

function Header() {
  // const { user, setUser, isLogin } = useContext(UserContext)
  const user = useSelector((state: any) => state.user)
  console.log('user 정보', user)
  return (
    <>
      <Link to="/">
        <S.Header>
          {user ? <span>{user.user.userName} </span> : null}
          Just do it!
        </S.Header>
      </Link>
    </>
  )
}
export default Header
