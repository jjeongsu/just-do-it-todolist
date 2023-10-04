import React, { useState } from 'react'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'
import { addTodo } from '../modules/todos'
import { useDispatch } from 'react-redux'
import { BsFillMicFill } from 'react-icons/bs'
import * as S from '../styles/speech.style'
export default function SpeechRecog() {
  const dispatch = useDispatch()
  const onCreate = (text: string) => dispatch(addTodo(text))
  function splitCommand(message: string) {
    const command_arr = message
      .replaceAll('그리고', '/')
      .split('/')
      .map(t => t.trim())
    console.log('그리고 단위로 잘린 문자열', command_arr)

    //배열 돌면서 만들어진 할일들을 추가하기
    command_arr.forEach(v => onCreate(v))
  }

  const commands = [
    {
      command: '* 추가하기',
      callback: (rawcontents: string) => {
        setMessage(`추가할 rawcontents: ${rawcontents}`)
        splitCommand(rawcontents)
      },
    },
    {
      command: ['happy', 'you'],
      callback: (command: any) => setMessage(`best matching : ${command}`),
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2,
      bestMatchOnly: true,
    },
    {
      command: '리셋',
      callback: ({ resetTranscript }: any) => {
        resetTranscript()
        setMessage('')
      },
    },
  ]

  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition({ commands })
  const [message, setMessage] = useState('') //사용자에게 보여질 메세지, 정보전달용
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: 'ko' })

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>
  }
  return (
    <>
      <S.Wrapper isListening={listening}>
        {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}

        <S.Mic
          isListening={listening}
          onTouchStart={startListening}
          onMouseDown={startListening}
          onTouchEnd={SpeechRecognition.stopListening}
          onMouseUp={SpeechRecognition.stopListening}
        >
          <BsFillMicFill className="mic-icon" />
        </S.Mic>
        <p>{transcript}</p>
      </S.Wrapper>
    </>
  )
}
