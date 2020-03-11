const React = require("react")
const GlobalContextProvider = require("./src/components/Context/Context")
  .default

exports.wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}