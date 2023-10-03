import React, { useState } from 'react'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'

export default function SpeechRecog() {
  const commands = [
    {
      command: 'I would like to order *',
      callback: (food: string) => setMessage(`Your order is for: ${food}`),
    },
  ]

  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition({ commands })
  const [message, setMessage] = useState('')
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true })

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>
  }
  return (
    <>
      <div>
        <p>Microphone: {listening ? 'on' : 'off'}</p>
        <button
          onTouchStart={startListening}
          onMouseDown={startListening}
          onTouchEnd={SpeechRecognition.stopListening}
          onMouseUp={SpeechRecognition.stopListening}
        >
          Hold to talk
        </button>
        <p>{transcript}</p>
        <p>{message}</p>
      </div>
    </>
  )
}
