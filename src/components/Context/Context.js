import React, { useReducer, createContext } from "react"

const initialState = {
  items: [],
}
export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

function reducer(state, action) {
  switch (action.type) {
    case "addItem": {
      return {
        items: [...state.items, action.payload],
      }
    }
    case "setItems": {
      return {
        items: action.payload,
      }
    }
    case "deleteItem": {
      return {
        items: state.items.filter(item => item.id !== action.payload),
      }
    }
    default: {
      return state
    }
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
