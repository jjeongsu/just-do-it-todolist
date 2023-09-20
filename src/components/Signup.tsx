import { styled } from 'styled-components'
import * as S from '../styles/home.style'

export default async function Signup() {
  return (
    <Outline>
      <S.Wrapper>
        <S.Title>회원가입</S.Title>
        <S.Input placeholder="email" />
        <S.Input placeholder="비밀번호를 입력하세요" />
        <S.Input placeholder="닉네임을 입력하세요" />
        <S.Button> 회원가입 하기 </S.Button>
      </S.Wrapper>
    </Outline>
  )
}
const Outline = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
