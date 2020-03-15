import React, { Component }  from 'react';
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from "../components/Chart"


const MondePage = () => (
  <Layout>
    <SEO title="Statistique monde"/>
    <h1 className="text-center display-4">MONDE</h1>


    <Chart/>
    <Link to="/">Accueil</Link>
  </Layout>
)

export default MondePage

