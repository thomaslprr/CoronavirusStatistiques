import React, {Component} from 'react';
import { AreaChart, CartesianGrid } from "recharts"
import Tooltip from "react-bootstrap/Tooltip"
import Area from "recharts/lib/cartesian/Area"
import XAxis from "recharts/lib/cartesian/XAxis"
import YAxis from "recharts/lib/cartesian/YAxis"
import ReactLoading from 'react-loading';




class Chart extends Component{

 state={
     loading: true,
     resultat: null
 }



  async componentDidMount() {
    const response = await fetch("https://covid19.mathdro.id/api/daily");
    const data = await response.json();

    this.setState({resultat: data, loading:false});


  }



  render(){
   if(!this.state.loading){
     return (
       <AreaChart width={800} height={400} data={this.state.resultat} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} style={{margin : "auto"}}>
         <CartesianGrid strokeDasharray="3 3" />
         <XAxis dataKey="reportDateString" />
         <YAxis />
         <Tooltip />
         <Area type='monotone' dataKey='totalConfirmed' stroke='#6f6024' fill='#ffdd57' />
         <Area type='monotone' dataKey='totalRecovered' stroke='#285d3a' fill='#48c774' />

       </AreaChart>

     );
   }

   return(
     <ReactLoading type={"spinningBubbles"} color={"#663399"} height={'14%'} width={'14%'}/>
   )

  }
}

export default Chart;