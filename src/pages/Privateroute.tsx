import { useContext } from 'react'
import { UserContext } from '../config/AuthProvider'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const { isLogin } = useContext(UserContext)
  return isLogin ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRoute
