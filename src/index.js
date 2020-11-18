import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createStore } from 'redux'

//STORE -> GLOBALIZED STATE

//ACTION -> (INCREMENT) DESCRIBES WHAT YOU WANT TO DO. FUNCTION THAT RETURNS AN OBJECT.
const increment = () => {
  return {
    type: 'INCREMENT',
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT',
  }
}

//REDUCER -> TAKES INFO FROM ACTION AND RETURNS TO STATE (UPDATED)
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

let store = createStore(counter)
//(Display in console optional?)
store.subscribe(() => console.log(store.getState()))

//DISPATCH -> DISPATCH THE ACTION
store.dispatch(increment())

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
