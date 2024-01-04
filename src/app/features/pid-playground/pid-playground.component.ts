import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import type { EChartsOption, SeriesOption } from 'echarts';

import { PID } from '../../../libraries/pid.ts/pid'
import { PIDContainer } from './models/pid-container'

@Component({
  selector: 'pid-playground',
  standalone: true,
  templateUrl: './pid-playground.component.html',
  styleUrl: './pid-playground.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    NgxEchartsDirective
  ],
  providers:[
    provideEcharts()
  ]
})
export class PidPlaygroundComponent implements OnInit {
  options!: EChartsOption;
  pidContainers: PIDContainer[] = [];
  TIME_INTERVAL_SECONDS = 1;
  MAX_CHANGES_PER_SECOND = 10;
  MAX_GRAPHED_ELEMENTS = 45;
  ITERATIONS_BEFORE_CHANGING_SET_POINT = 15;

  constructor() {
    const startPoint = Math.random() * 5;
    this.pidContainers = [
      new PIDContainer("(1, 1, 1)", 1, 1, 1, startPoint, this.MAX_GRAPHED_ELEMENTS, this.normalizePidOutput.bind(this)),
      new PIDContainer("(2, 1, 1)", 2, 1, 1, startPoint, this.MAX_GRAPHED_ELEMENTS, this.normalizePidOutput.bind(this)),
      new PIDContainer("(1, 2, 1)", 1, 2, 1, startPoint, this.MAX_GRAPHED_ELEMENTS, this.normalizePidOutput.bind(this)),
      new PIDContainer("(1, 1, 2)", 1, 1, 2, startPoint, this.MAX_GRAPHED_ELEMENTS, this.normalizePidOutput.bind(this))
    ]
  }

  generateSetPoint(): number {
    return Math.random() * 5;
  }

  normalizePidOutput(pidOutput: number): number {
    const changesPerInterval = this.TIME_INTERVAL_SECONDS * this.MAX_CHANGES_PER_SECOND;
    const normalizedValue = pidOutput / changesPerInterval;
  
    return Math.min(changesPerInterval, Math.max(-changesPerInterval, normalizedValue));
  }

  ngOnInit(): void {
    const xAxisData: string[] = [];
    const target: number[] = [];

    let setPoint = this.generateSetPoint();
    for(const pidContainer of this.pidContainers) {
      pidContainer.adjustSetPoint(setPoint);
    }
    
    let iteration = 0;

    console.log("START");

    setInterval(() => {
      xAxisData.push(`${setPoint.toFixed(3)}`);
      target.push(setPoint);

      for(const pidContainer of this.pidContainers) {
        pidContainer.runLoop();
      }

      if (xAxisData.length > this.MAX_GRAPHED_ELEMENTS) {
        xAxisData.shift();
        target.shift();
      }

      if (iteration % this.ITERATIONS_BEFORE_CHANGING_SET_POINT === 0) {
        setPoint = this.generateSetPoint();

        for(const pidContainer of this.pidContainers) {
          pidContainer.adjustSetPoint(setPoint);
        }
      }

      iteration += 1;

      const legendData = [
        'set_point'
      ];
      const seriesData: SeriesOption[] = [
        {
          name: 'set_point',
          type: 'line',
          data: target,
          animationDelay: (idx: number) => idx * 0, //1,
          colorBy: 'series',
          symbol: 'none',
          universalTransition: true
        }
      ];

      for (const pidContainer of this.pidContainers) {
        legendData.push(
          pidContainer.name
        );
        seriesData.push(
          {
            name: pidContainer.name,
            type: 'line',
            data: pidContainer.data,
            animationDelay: (idx: number) => idx * 0, //1,
            colorBy: 'series',
            symbol: 'none',
            universalTransition: true
          }
        );
      };

      this.options = {
        legend: {
          data: legendData,
          align: 'left',
        },
        tooltip: {},
        xAxis: {
          data: xAxisData,
          silent: true,
          splitLine: {
            show: false,
          },
        },
        yAxis: {},
        series: seriesData,
        animationEasing: 'linear',
        animationDelayUpdate: 0, //idx => idx * 1,
      };
    }, this.TIME_INTERVAL_SECONDS * 1000);
  }
}