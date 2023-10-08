import React, { createContext, useContext, useState } from 'react'
import * as S from '../../styles/StickyButton.style'
export interface IButtonState {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const StickyButtonContext = createContext<IButtonState>({
  isOpen: false,
  setIsOpen: () => {},
})
const useStikcyButtonContext = () => useContext(StickyButtonContext)

export function StickyButton({ children }: any) {
  const [isOpen, setIsOpen] = useState(false)
  const value = {
    isOpen,
    setIsOpen,
  }
  return (
    <>
      <StickyButtonContext.Provider value={value}>
        <S.Wrapper>{children}</S.Wrapper>
      </StickyButtonContext.Provider>
    </>
  )
}

export function StickyButtonBase(props: any) {
  const { isOpen, setIsOpen } = useStikcyButtonContext()
  return (
    <S.StickyButton onClick={() => setIsOpen(!isOpen)}>
      {props.children}
    </S.StickyButton>
  )
}

export function StickyButtonHidden(props: any) {
  const { isOpen } = useStikcyButtonContext()

  return (
    <S.StickyButtonHidden isOpen={isOpen} className={props.className}>
      {props.children}
    </S.StickyButtonHidden>
  )
}
