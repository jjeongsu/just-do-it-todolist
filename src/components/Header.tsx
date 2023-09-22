import { Link } from 'react-router-dom'
import * as S from '../styles/home.style'
import { useContext, useEffect } from 'react'
import { IUser, UserContext } from '../config/AuthProvider'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../config/firebase'
import {
  DocumentData,
  DocumentReference,
  doc,
  getDoc,
} from 'firebase/firestore'
function Header() {
  const { user, setUser, isLogin } = useContext(UserContext)
  let userInfo: DocumentReference<unknown, DocumentData>
  let docSnap
  useEffect(() => {
    onAuthStateChanged(auth, async user => {
      if (user) {
        userInfo = doc(db, 'accounts', user.uid)
        docSnap = await getDoc(userInfo)
        const data: any = await docSnap.data()
        if (data) {
          setUser({
            ...user,
            userName: data.userName,
            userEmail: data.userEmail,
            userIdx: data.userIdx,
          })
        }
      }
    })
  }, [])
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
