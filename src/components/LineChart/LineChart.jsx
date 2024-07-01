import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";
const LineChart = ({ historicalData }) => {
  const [chartData, setChartData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    const chartDataCopy = [["Date", "Prices"]];
    if (historicalData.prices) {
      historicalData.prices.map((item) => {
        const d = new Date(item[0]).toLocaleDateString().slice(0, -5);
        chartDataCopy.push([`${d}`, item[1]]);
      });
      setChartData(chartDataCopy);
    }
  }, [historicalData]);
  return (
    <Chart chartType="LineChart" data={chartData} height="100%" legendToggle />
  );
};

export default LineChart;