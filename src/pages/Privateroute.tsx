import { useContext } from 'react'
import { UserContext } from '../config/AuthProvider'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = () => {
  const user = useSelector((state: any) => state.user)
  return user.userIdx === '' ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRoute
