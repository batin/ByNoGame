import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo"
import Home from '../components/Home/Home'
import './index.scss'

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <Home />
    </Layout>
  )
}
export default IndexPage
