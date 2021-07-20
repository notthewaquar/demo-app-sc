import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.drawChart('myChart1');
    this.drawChart('myChart2');
    this.drawChart('myChart3');
    this.drawChart('myChart4');
  }

  drawChart(el: string) {
    new Chart(el, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              '#ff5722',
              '#ff5722',
              '#ff5722',
              '#ff5722',
              '#ff5722',
              '#ff5722',
            ],
            borderColor: [
              '#bd1414',
              '#bd1414',
              '#bd1414',
              '#bd1414',
              '#bd1414',
              '#bd1414',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        scales: {
        },
      },
    });
  }
}
