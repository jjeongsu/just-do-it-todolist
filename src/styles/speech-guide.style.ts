import { styled } from 'styled-components'

export const Wrapper = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: relative;
  width: 300px;
  color: ${({ theme }) => theme.darkgray};
  margin-left: 20px;
  border: 1px solid ${({ theme }) => theme.lightgray};
  border-radius: 30px 30px 30px 0px;
  padding: 20px 30px;
  p {
    font-size: 13px;
  }
  h1 {
    font-size: 15px;
  }
  h2 {
    font-size: 12px;
  }
  .highlight {
    background-color: ${({ theme }) => theme.accentColor};
    color: white;
    font-weight: 700;
  }
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  width: 30px;
  position: absolute;
  top: 30px;
  right: 20px;

  .close-icon {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.darkgray};
    cursor: pointer;
  }
`
