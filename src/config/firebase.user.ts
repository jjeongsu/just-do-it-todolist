import {
  collection,
  getDocs,
  query,
  setDoc,
  where,
  doc,
} from 'firebase/firestore'
import { db } from './firebase'

export const getUserData = async (userIdx: string) => {
  const accountRef = collection(db, 'accounts')
  try {
    const q = query(accountRef, where('userIdx', '==', userIdx))
    const data = await getDocs(q)
    return data.docs[0].data()
  } catch (error) {
    console.log('db에서 user data를 가져오는데 실패했습니다 :', error)
    throw error
  }
}

export const setUserData = async (data: any) => {
  try {
    await setDoc(doc(db, 'accounts', data.userIdx), data)
    return true
  } catch (error) {
    console.log('db에 user data를 넣는데 실패했습니다.', error)
    throw error
  }
}
