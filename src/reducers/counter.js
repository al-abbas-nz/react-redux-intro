const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1 //(action.payload to increment by leap)
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

export default counterReducer
