import { styled } from 'styled-components'

export const Wrapper = styled.div<{ isListening: boolean }>`
  padding: 10px 20px;
  height: 71px;
  height: 51px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .mic-icon {
    color: ${props =>
      props.isListening ? props.theme.bgColor : props.theme.accentColor};
  }

  p {
    font-size: 15px;
    color: ${({ theme }) => theme.darkgray};
  }
`
export const Mic = styled.button<{ isListening: boolean }>`
  background: ${props =>
    props.isListening ? props.theme.accentColor : 'transparent'};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.accentColor};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`
