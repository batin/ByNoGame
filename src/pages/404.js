import React from "react"
import {Link} from 'gatsby'
import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{height: '40vh',textAlign:'center'}}>
      <h1 style={{}}>NOT FOUND</h1>
      <h1><Link to="/">Home Page</Link></h1>
      <h1><Link to="/addCard">Add Card</Link></h1>
    </div>
  </Layout>
)

export default NotFoundPage
