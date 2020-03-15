import React, {Component} from 'react';
import { Doughnut } from 'react-chartjs-2';

class Chart extends Component{


  render(){
    return (
      <div className="chart">
        Mon composant graphique
        <Doughnut/>
      </div>
    )
  }
}

export default Chart;