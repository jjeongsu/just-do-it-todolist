import { styled } from 'styled-components'
import { IButtonState } from '../components/Sticky'

export const StickyButton = styled.button`
  width: 5rem;
  height: 5rem;
  position: fixed;
  bottom: 50px;
  right: 50px;
  border-radius: 50%;
  border: 1px solid white;
  box-shadow: 10px 14px 18px -14px rgba(150, 153, 150, 1);
  background-color: ${({ theme }) => theme.subAccentColor};
  cursor: pointer;
`
export const Wrapper = styled.div``

export const StickyButtonHidden = styled.button<{ isOpen: boolean }>`
  width: 3rem;
  height: 3rem;
  position: fixed;
  bottom: 150px;
  right: 65px;
  border-radius: 50%;
  border: 1px solid white;
  background-color: white;
  cursor: pointer;
  box-shadow: 10px 14px 18px -14px rgba(150, 153, 150, 1);
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition-property: opacity;
  transition-duration: 0.5s;
  transition-timing-function: ease;
`
