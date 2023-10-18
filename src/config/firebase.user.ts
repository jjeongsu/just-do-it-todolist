import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from './firebase'

export const getUserInfo = async (email: string) => {
  const accountCollection = collection(db, 'accounts')
  const q = await query(accountCollection, where('userEmail', '==', email))
  const data = await getDocs(q)
  const userdata = data.docs[0].data()
  return userdata
}
