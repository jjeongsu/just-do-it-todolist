import { useContext } from 'react'
import { UserContext } from '../config/AuthProvider'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = () => {
  const { isLogin } = useContext(UserContext)

  return isLogin ? <Navigate to="/" /> : <Outlet />
}

export default PublicRoute
