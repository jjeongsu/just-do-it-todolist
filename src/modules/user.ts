/**
 * 필요한 액션들
 * 유저정보 저장하기 : ADD_USER_INFO
 */

//액션타입을 선언한다
const ADD_USER_INFO = 'user/ADD_USER_INFO'
const DELETE_USER_INFO = 'user/DELETE_USER_INFO'

//액션 생성함수를 선언한다.
export const addUserInfo = (user: IUserInfo) => {
  return {
    type: ADD_USER_INFO,
    user: user,
  }
}

export const deleteUserInfo = () => {
  return {
    type: DELETE_USER_INFO,
  }
}

export interface IUser {
  userName?: string | null
  userEmail?: string | null
  userIdx?: string | null
}

export interface IUserInfo {
  user: IUser
  isLogin: boolean
}

const initialState: IUserInfo = {
  user: { userName: '', userEmail: '', userIdx: '' },
  isLogin: false,
}

export default function user(
  state = initialState,
  action: { type: any; user: IUser }
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
