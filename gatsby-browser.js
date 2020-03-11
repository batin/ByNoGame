import React from "react"
import GlobalContextProvider from "./src/components/Context/Context"

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}