import styled from 'styled-components'
export const Header = styled.div`
  width: 100vw;
  color: ${({ theme }) => theme.bgColor};
  font-family: 'Lobster', cursive;
  font-size: 45px;
  font-weight: 700;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:hover {
    animation-duration: 2s;
    animation-name: rainbow;
    animation-iteration-count: infinite;
  }
  @keyframes rainbow {
    0% {
      color: ${({ theme }) => theme.bgColor};
    }
    70% {
      color: ${({ theme }) => theme.accentColor};
    }
    100% {
      color: ${({ theme }) => theme.subAccentColor};
    }
  }
`
export const Wrapper = styled.div`
  width: 400px;
  height: 400px;
  background-color: ${({ theme }) => theme.bgColor};
  border-radius: 47px;
  box-shadow:
    -15px 15px 33px #afafaf,
    15px -15px 33px #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Input = styled.input`
  width: 250px;
  height: 40px;
  padding: 10px;
  margin-bottom: 10px;
  outline: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.darkgray};
  &:focus {
    border-bottom: 3px solid ${({ theme }) => theme.accentColor};
  }
`
export const Button = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.accentColor};
    color: ${({ theme }) => theme.bgColor};
  }
`
export const ButtonBox = styled.div`
  margin-top: 10px;
  width: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
export const Title = styled.h1`
  color: ${({ theme }) => theme.accentColor};
  height: 50px;
  margin: 0;
  margin-bottom: 20px;
`
