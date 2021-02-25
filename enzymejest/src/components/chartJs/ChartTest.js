import React, { Component } from 'react'
import { Scatter, Line } from "react-chartjs-2";

export default class ChartTest extends Component {
  reportingRiskOptions = (yLabel) => {
    return {
        maintainAspectRatio: false,
        legend: {
            position: 'left',
        },
      }
    };
    render() {
      let graphPeerData = new Array([1,2,3].length).fill({});
      console.log('graphPeerData',graphPeerData)
      let option = this.reportingRiskOptions('a')
      const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'red',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40]
              }
            ]
          };
        return (
            <div>
                <Line data={data}  options={option}/>
            </div>
        )
    }
}
