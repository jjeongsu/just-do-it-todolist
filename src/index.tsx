import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global-style'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './styles/theme'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const reducer = (state: any, action: any) => {
  let newState = {}
  if (state === undefined) {
    const initial = [
      { id: 0, task_name: '아침 운동 하기', task_state: 'TODO' },
      { id: 1, task_name: '생활코딩 강의 듣기', task_state: 'TODO' },
      { id: 2, task_name: '강아지 산책 시키기', task_state: 'TODO' },
      { id: 3, task_name: '명상하기', task_state: 'DONE' },
    ]
    return {
      todos: initial,
    }
  }

  if (action.type === 'CHANGE_STATE') {
    console.log('action', action)
    let i = 0
    while (i < state.todos.length) {
      if (action.id === state.todos[i].id) {
        break
      }
    }
    newState = { ...state } //여기 어려움
    return newState
  }
}
const store = createStore(reducer)
export type RootState = ReturnType<typeof store.getState>
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={lightTheme}>
          <App />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
)

reportWebVitals()
