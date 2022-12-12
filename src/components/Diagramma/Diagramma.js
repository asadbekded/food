import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
   
   const [state, setState] = useState({
         
         series: [75, 50, 67],
         options: {
            chart: {
               height: 200,
               type: 'radialBar',
            },
            plotOptions: {
               radialBar: {
                  dataLabels: {
                     name: {
                        fontSize: '14px',
                     },
                     value: {
                        fontSize: '12px',
                     },
                     total: {
                        show: true,
                        label: 'Total',
                        formatter: function (w) {
                           return 264
                        }
                     }
                  }
               }
            },
            fill: {
               colors: ['#65B0F6', '#FFB572', '#FF7CA3',]
            },
            labels: ['Delivery', 'To Go', 'Dine In',],
         },
      }
   )
   
   
   return (
      <div id="chart">
      <ReactApexChart options={state.options} series={state.series} type="radialBar" width={200} height={200} />
      </div>
      );
   }
   
export default ApexChart;