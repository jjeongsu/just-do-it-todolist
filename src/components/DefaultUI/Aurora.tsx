import { styled } from 'styled-components'

function Aurora() {
  return (
    <AuroraWrap className="wrap">
      <div className="aurora-base aurora-one"></div>
      <div className="aurora-base aurora-two"></div>
      <div className="aurora-base aurora-three"></div>
    </AuroraWrap>
  )
}
export default Aurora

const AuroraWrap = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;

  .aurora-base {
    position: absolute;
    filter: blur(80px);
    opacity: 0.7;
  }
  .aurora-one {
    border-radius: 100%;
    width: 100vw;
    height: 65vh;
    background-color: #50c8ec;
    left: -50px;
    top: -300px;
    z-index: 3; /* 첫 번째 그라데이션이 맨 앞으로 오도록 조정 */
  }
  .aurora-two {
    width: 80vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.subAccentColor};
    bottom: -30px;
    left: -80px;
  }
  .aurora-three {
    border-radius: 50%; /* 그라데이션이 부드럽게 겹치도록 영역을 좀더 둥글게 */
    width: 100vw;
    height: 100vh;
    bottom: -8px;
    right: -20px;
    background-color: ${({ theme }) => theme.accentColor};
  }
  @keyframes rotate {
    100% {
      transform: rotate(1turn) translate(200px) rotate(-1turn);
    }
  }
  @keyframes reverse {
    100% {
      transform: rotate(-2turn) translate(200px) rotate(2turn);
    }
  }
  .aurora-one {
    border-radius: 100%;
    background-color: #50c8ec;
    left: -50px;
    top: -300px;
    z-index: 3;
    animation: rotate 5s linear infinite; /* 키프레임 애니메이션 적용 */
    transform: rotate(0) translate(80px) rotate(0);
  }
  .aurora-three {
    border-radius: 100%;
    /* bottom: -80px; */
    right: -200px;
    background-color: ${({ theme }) => theme.accentColor};
    animation: reverse 5s linear infinite; /* 키프레임 애니메이션 적용 */
    transform: rotate(0) translate(200px) rotate(0);
  }
`
