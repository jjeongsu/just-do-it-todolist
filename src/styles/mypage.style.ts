import { styled } from 'styled-components'

export const Wrapper = styled.div`
  width: 30rem;
  height: 45rem;
  background-color: ${({ theme }) => theme.bgColor};
  filter: drop-shadow(14px 11px 19px #383838);
  display: flex;
  flex-direction: column;
`
