import React, { createContext, useContext, useState } from 'react'
export interface IUser {
  userName?: string | null
  userEmail?: string | null
  userIdx?: string | null
}
interface IUserState {
  user: IUser
  setUser: React.Dispatch<React.SetStateAction<IUser>>
  token: string | undefined
  setToken: React.Dispatch<React.SetStateAction<string>>
  isLogin: boolean
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}

//로그인 감지하여 하위 컴포넌트에 전달해주기 -> 일단 contextAPI로 만들고 이후 redux로 바꾸기
export const UserContext = createContext<IUserState>({
  user: { userName: '', userEmail: '', userIdx: '' },
  setUser: () => {},
  token: '',
  setToken: () => {},
  isLogin: false,
  setIsLogin: () => {},
})

export const defaultHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
}

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<IUser>({
    userName: '',
    userEmail: '',
    userIdx: '',
  }) //현재 로그인한 유저의 정보
  const [token, setToken] = useState('') //로그인하면 받아올 토큰 정보
  const [isLogin, setIsLogin] = useState(false) //로그인 여부 판단
  const value = {
    user,
    setUser,
    token,
    setToken,
    isLogin,
    setIsLogin,
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
