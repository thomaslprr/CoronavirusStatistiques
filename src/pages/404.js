import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Erreur" />
    <h1>NOT FOUND</h1>
    <p>La page demandée n'existe pas.</p>
  </Layout>
)

export default NotFoundPage
