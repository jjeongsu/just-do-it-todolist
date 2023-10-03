import React, { useState } from 'react'
// import { useSpeechRecognition } from 'react-speech-kit'

function Speak() {
  const [value, setValue] = useState('')
  // const { listen, listening, stop } = useSpeechRecognition({
  //   onResult: result => {
  //     setValue(result)
  //   },
  // })
  // console.log('listening', listening)
  return (
    <div>
      {/* <div>{value}</div>
      <button onMouseDown={listen} onMouseUp={stop}>
        {' '}
        SPEAK!!{' '}
      </button>
      {listening && <span>음성인식 활성화 중</span>} */}
    </div>
  )
}
export default Speak
