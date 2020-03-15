import React, { Component }  from 'react';
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from "../components/Chart"


const ChinePage = () => (
  <Layout>
    <SEO title="Statistique chine"/>
    <h1>Retrouvez les statistiques en chine</h1>

    <Chart></Chart>
    <Link to="/">Accueil</Link>
  </Layout>
)

export default ChinePage

