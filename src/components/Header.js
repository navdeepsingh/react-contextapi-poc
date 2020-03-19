import React from "react"

const Header = () => {
  return (
    <header className="App-header">
      <h1>Context API: POC</h1>
      <ul>
        <li>Create the context using `React.createContext()`</li>
        <li>Provide the context using &lt;ArticleContext.Provider value=(`stateItems`)&gt;</li>
        <li>Consume the context using `useContext`</li>
        <li>Enhance the context with `useReducer` (Understand useReducer from here: https://codesandbox.io/s/hooks-usereducer-8lr60)</li>
      </ul>
    </header>
  )
}

export default Header