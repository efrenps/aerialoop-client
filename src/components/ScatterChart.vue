<template>
    <div class='example'>
      <apexchart
        width='100%'
        height='400'
        type='scatter'
        :options='chartOptions'
        :series='series'
      ></apexchart>
      <div>
      </div>
    </div>
  </template>


<script>
/* eslint-disable */
export default {
  name: 'ScatterChart',
  props: ['chartData'],
  data: function() {
    const chartData = this.chartData;
    return {
        series: chartData.series,
        chartOptions: {
            chart: {
              type: 'scatter',
            },
            title: {
              text: chartData.scatterName,
              align: 'center'
            },
            xaxis: {
              tickAmount: 10,
              labels: {
                formatter: function(val) {
                  return `${parseInt(val)} Min`;
                }
              },
              title: {
                text: 'Flight Time'
              }
            },
            yaxis: {
              tickAmount: 10,
              labels: {
                formatter: function(val) {
                    return `${parseInt(val)} W`;
                }
              },
              title: {
                text: 'Power Consumption'
              }
            },
            tooltip: {
                custom: function({ series, seriesIndex, dataPointIndex, w }) {
                    const record = chartData.series[seriesIndex];
                    const power = Math.round(series[seriesIndex][dataPointIndex]);
                    const battery = Math.round(record.extraData[dataPointIndex].remainingBattery * 100);

                    let borderClass = 'border_green';
                    if (battery < 60 && battery >= 40){
                        borderClass = 'border_yellow';
                    } else if (battery < 40){
                        borderClass = 'border_red';
                    }

                    const value = `${power} Watts (Battery: ${battery}%)`;
                    return (`<div class="arrow_box ${borderClass}"><span>${value}</span></div>`);
                }
            }
        },
    };
  },
  methods: {
  }
};
</script>

<style>
.border_green {
  border: 2px solid #3c9108;
}
.border_yellow {
  border: 2px solid #f1da54;
}
.border_red {
  border: 2px solid #a60b0b;
}

.arrow_box {
  position: relative;
  background: #555;
}
.arrow_box:after, .arrow_box:before {
  right: 100%;
  top: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}
.arrow_box:after {
  border-color: rgba(85, 85, 85, 0);
  border-right-color: #555;
  border-width: 10px;
  margin-top: -10px;
}
.arrow_box:before {
  border-color: rgba(0, 0, 0, 0);
  border-right-color: #000000;
  border-width: 13px;
  margin-top: -13px;
}

.apexcharts-tooltip {
  color: #fff;
  transform: translateX(10px) translateY(10px);
  overflow: visible !important;
  white-space: normal !important;
}

.apexcharts-tooltip span {
  padding: 5px 10px;
  display: inline-block;
}
</style>