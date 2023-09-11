import { Link } from 'react-router-dom'
import * as S from '../styles/home.style'
function Header() {
  return (
    <>
      <Link to="/">
        <S.Header>Just do it!</S.Header>
      </Link>
    </>
  )
}
export default Header
