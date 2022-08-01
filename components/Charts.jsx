import React from "react";

const Charts = () => {
  return <div>Charts</div>;
};

export default Charts;

// import React from "react";
// import { Chart } from "react-chartjs-2";

// export const RadarChart = () => {
//   const dataRadar = {
//     labels: [
//       "Eating",
//       "Drinking",
//       "Sleeping",
//       "Designing",
//       "Coding",
//       "Cycling",
//       "Running",
//     ],
//     datasets: [
//       {
//         label: "My First Dataset",
//         data: [65, 59, 90, 81, 56, 55, 40],
//         fill: true,
//         backgroundColor: "rgba(133, 105, 241, 0.2)",
//         borderColor: "rgb(133, 105, 241)",
//         pointBackgroundColor: "rgb(133, 105, 241)",
//         pointBorderColor: "#fff",
//         pointHoverBackgroundColor: "#fff",
//         pointHoverBorderColor: "rgb(133, 105, 241)",
//       },
//       {
//         label: "My Second Dataset",
//         data: [28, 48, 40, 19, 96, 27, 100],
//         fill: true,
//         backgroundColor: "rgba(54, 162, 235, 0.2)",
//         borderColor: "rgb(54, 162, 235)",
//         pointBackgroundColor: "rgb(54, 162, 235)",
//         pointBorderColor: "#fff",
//         pointHoverBackgroundColor: "#fff",
//         pointHoverBorderColor: "rgb(54, 162, 235)",
//       },
//     ],
//   };

//   const configRadarChart = {
//     type: "radar",
//     data: dataRadar,
//     options: {},
//   };

//   var chartRadarRef = React.createRef();

//   var chartBar = Chart(chartRadarRef, configRadarChart);

//   return (
//     <div>
//       <div className="shadow-lg rounded-lg overflow-hidden">
//         <div className="py-3 px-5 bg-gray-50">Radar chart</div>
//         <canvas
//           className="p-10"
//           id="chartRadar"
//           ref={this.chartRadarRef}
//         ></canvas>
//       </div>
//     </div>
//   );
// };
