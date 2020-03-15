import React, {Component} from 'react';
import { AreaChart, Pie, PieChart } from "recharts"
import Tooltip from "react-bootstrap/Tooltip"
import Area from "recharts/lib/cartesian/Area"
import XAxis from "recharts/lib/cartesian/XAxis"
import YAxis from "recharts/lib/cartesian/YAxis"
import ReactLoading from 'react-loading';


const data01 = [
  { country_name: 'China', cases: 80849, deaths: '3,199'},
{ country_name: 'Italy', cases: 24747, deaths: '1,809' },
{ country_name: "Iran", cases: 13938, deaths: "724"},
{ country_name: "S. Korea", cases: 8162, deaths: "75"},
{ country_name: "Spain", cases: 7843, deaths: "292"},

];



class Camembert extends Component{

  state={
    loading: true,
    resultat: null
  }



  async componentDidMount() {
    const response = await fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "85de271099msh83528430f51fd19p152b6bjsn217e4a52701f"
      }
    });
    const data = await response.json();


    this.setState({loading: false, resultat: data});



  }



  render(){
    if(!this.state.loading){
      return(
        <PieChart width={400} height={400}>
          <Pie dataKey="cases" isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
          <Tooltip />
        </PieChart>
      )
    }

    return(
      <ReactLoading type={"spinningBubbles"} color={"#663399"} height={'14%'} width={'14%'}/>
    )

  }
}

export default Camembert;