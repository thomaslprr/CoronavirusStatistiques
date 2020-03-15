import React from 'react';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import ReactLoading from 'react-loading';
import Chart from "./Chart"




class CoronasPage extends React.Component {


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
          <div className="">
            <div className="text-center ">
              <Button className="m-2 btn-lg" variant="warning ">
                Cas total <Badge pill variant="big">{this.state.resultatgeneraux['total_cases']}</Badge>
              </Button>

              <Button className="m-2 btn-lg" variant="danger">
                Mort total <Badge pill variant="big">{this.state.resultatgeneraux['total_deaths']}</Badge>
              </Button>

              <Button className="m-2 btn-lg" variant="info">
                Nouveau cas <Badge pill variant="big">{this.state.resultatgeneraux['new_cases']}</Badge>
              </Button>

              <Button className="m-2 btn-lg" variant="dark">
                Nouveau mort <Badge pill variant="big">{this.state.resultatgeneraux['new_deaths']}</Badge>
              </Button>
            </div>
            <div className="m-5">
              <Chart/>
            </div>
          </div>


          <p className="text-center font-italic">Dernière mise à jour des données : {this.state.resultatgeneraux['statistic_taken_at']}</p>




          <Table striped bordered hover responsive variant="dark">
            <thead>
            <tr>
              <th>Pays</th>
              <th>Cas</th>
              <th>Cas critique</th>
              <th>Mort</th>
              <th>Nouveau cas</th>
              <th>Nouveau décès</th>
              <th>Rétablie</th>

            </tr>
            </thead>
            <tbody>

            {this.state.resultat.map(pays =>(
              <tr>
                <td>{pays.country_name}</td>
                <td>{pays.cases}</td>
                <td>{pays.serious_critical}</td>
                <td>{pays.deaths}</td>
                <td>{pays.new_cases}</td>
                <td>{pays.new_deaths}</td>
                <td>{pays.total_recovered}</td>


              </tr>

            ))}


            </tbody>
          </Table>
        </div>
      )

    }

    return (
          <ReactLoading type={"bars"} color={"#663399"} height={'14%'} width={'14%'}/>

    );
  }






}

export default CoronasPage;