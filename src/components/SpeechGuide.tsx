import { useState } from 'react'
import * as S from '../styles/speech-guide.style'
import { AiOutlineClose } from 'react-icons/ai'
export default function SpeechGuide() {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <>
      <S.Wrapper isOpen={isOpen}>
        <h1>
          이제 <span className="highlight"> 보이스 명령</span>으로 <br />
          할일을 추가할 수 있습니다.
        </h1>
        <h2> 마이크 버튼을 누르고 다음과 같이 말해 보세요</h2>
        <p>
          "
          <span className="highlight">운동가기 그리고 스터디공부하기 추가</span>
          "
        </p>
        <S.Button
          onClick={() => {
            setIsOpen(false)
          }}
        >
          {' '}
          <AiOutlineClose className="close-icon" />
        </S.Button>
      </S.Wrapper>
    </>
  )
}
