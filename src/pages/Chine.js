import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Chart from "../components/Chart"

class Chine extends Component {

  constructor(props){
    super(props);
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getchartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:[
          {
            label:'Population',
            data:[
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });
  }


  render(){

    return(
      <Layout>
        <SEO title="Statistique chine"/>
        <h1>Retrouvez les statistiques en chine</h1>

        <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>

        <Link to="/">Accueil</Link>
      </Layout>
    )
  }





}

export default Chine;