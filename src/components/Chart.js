import React, {Component} from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts'
import ReactLoading from 'react-loading';
import { ResponsiveContainer } from "react-responsive-widget"




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

          <div className="justify-content-center align-content-center cent">
            <AreaChart width={window.innerWidth-100} height={400} data={this.state.resultat} margin={{ left: 30, bottom: 0 }} style={{align: "center"}}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="reportDateString" />
              <YAxis />
              <Tooltip />
              <Area type='monotone' dataKey='totalConfirmed' stroke='#ffc107' fill='#ffc107' />
              <Area type='monotone' dataKey='totalRecovered' stroke='#285d3a' fill='#48c774' />
            </AreaChart>
          </div>





      );
    }

    return(
      <ReactLoading type={"bars"} color={"#000000"} height={'14%'} width={'14%'}/>
    )

  }
}

export default Chart;