import React from 'react';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import ReactLoading from 'react-loading';
import Chart from "./Chart"




class StatsGeneraux extends React.Component {


  state = {
    loading: true,
    resultat: null,
    dateMAJ : null,
    resultatgeneraux : null
  };


  async componentDidMount() {
    const response = await fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "85de271099msh83528430f51fd19p152b6bjsn217e4a52701f"
      }
    });
    const data = await response.json();


    const response2 = await fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "85de271099msh83528430f51fd19p152b6bjsn217e4a52701f"
      }
    });
    const data2 = await response2.json();

    this.setState({resultat: data.countries_stat});


    this.setState({resultatgeneraux: data2 , dateMAJ: data.statistic_taken_at,loading: false});




  }






  render() {



    if(!this.state.loading){

      return (

        <div>

            <div className="text-center ">

              <div className="card-group">

              <div className="card text-black bg-warning m-3 card">
                <div className="card-body">
                  <h5 className="card-title">Cas totals</h5>
                  <p className="card-text">{this.state.resultatgeneraux['total_cases']}</p>
                </div>
              </div>

              <div className="card text-white bg-success m-3 card ">
                <div className="card-body">
                  <h5 className="card-title">Cas rétablis</h5>
                  <p className="card-text">{this.state.resultatgeneraux['total_recovered']}</p>
                </div>
              </div>

              <div className="card text-white bg-danger m-3 card">
                <div className="card-body">
                  <h5 className="card-title">Morts totals</h5>
                  <p className="card-text">{this.state.resultatgeneraux['total_deaths']}</p>
                </div>
              </div>
              </div>


              <div className="card-group m-5 ">

              <div className="card text-white bg-info card" >
                <div className="card-body">
                  <h5 className="card-title">Nouveaux cas </h5>
                  <p className="card-text">{this.state.resultatgeneraux['new_cases']}</p>
                </div>
              </div>
              <div className="card text-white bg-dark  card" >
                <div className="card-body">
                  <h5 className="card-title">Nouveaux morts</h5>
                  <p className="card-text">{this.state.resultatgeneraux['new_deaths']}</p>
                </div>
              </div>
              </div>

            </div>


            <div className="">
              <Chart/>
            </div>
        </div>
      )

    }

    return (
          <ReactLoading type={"bars"} color={"#000000"} height={'14%'} width={'14%'}/>

    );
  }






}

export default StatsGeneraux;