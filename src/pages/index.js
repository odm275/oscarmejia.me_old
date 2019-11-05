import React from 'react'
import Layout from 'gatsby-theme-blog/src/components/layout'
import Footer from 'gatsby-theme-blog/src/components/home-footer'

function Home({ children, ...props }) {
  return (
    <Layout {...props}>
      <h1>Welcome home</h1>
      {children}
    </Layout>
  )
}

export default Home
