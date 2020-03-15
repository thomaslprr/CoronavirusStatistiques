import React, {Component} from 'react';
import {AeraChart} from 'recharts';
import Tooltip from "react-bootstrap/Tooltip"
import Area from "recharts/lib/cartesian/Area"
import XAxis from "recharts/lib/cartesian/XAxis"
import YAxis from "recharts/lib/cartesian/YAxis"



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
    return (
        <AeraChart width={600} height={400} data={this.state.resultat} margin={{top:10, right:30, left:0, bottom:0}} >
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip/>
          <Area type='monotone' dataKey='totalConfirmed' stroke='#8884d8' fill='8884d8'/>
          <Area type='monotone' dataKey='totalRecovered' stroke='#333' fill='8884d8'/>

        </AeraChart>

    );
  }
}

export default Chart;