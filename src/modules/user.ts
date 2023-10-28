/**
 * 필요한 액션들
 * 유저정보 저장하기 : ADD_USER_INFO
 */

import { getUserData } from '../config/firebase.user'

//액션타입을 선언한다
const ADD_USER_INFO = 'user/ADD_USER_INFO'
const DELETE_USER_INFO = 'user/DELETE_USER_INFO'

//액션 생성함수를 선언한다.
export const addUserInfo = async (userIdx: string) => {
  const userData = await getUserData(userIdx)
  return {
    type: ADD_USER_INFO,
    user: userData,
  }
}

export const deleteUserInfo = () => {
  return {
    type: DELETE_USER_INFO,
  }
}

interface IUserInfo {
  userIdx: string
  userEmail: string
  userPassword: string
  userName: string
}
const initialState: IUserInfo = {
  userIdx: '',
  userEmail: '',
  userPassword: '',
  userName: '',
}

export default function user(
  state = initialState,
  action: { type: any; user: IUserInfo }
) {
  switch (action.type) {
    case ADD_USER_INFO:
      return { ...state, ...action.user }
    case DELETE_USER_INFO:
      return { ...state, ...initialState }
    default:
      return state
  }
}
