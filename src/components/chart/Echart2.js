import ReactApexChart from "react-apexcharts";
import eChart2 from "./configs/eChart2";
import React, { useState } from "react";
import Frame from '../../assets/images/Frame 1171278118.svg';
function EChart2() {
  const [activeButton, setActiveButton] = useState('patients');
  const [chartSeries, setChartSeries] = useState(eChart2.series);  
 
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);

   
    if (buttonName === 'patients') {
      setChartSeries([
        {
          name: "Total Patients",
          data: [30, 40, 45, 50, 49, 60]  
        }
      ]);
    } else if (buttonName === 'embryo') {
      setChartSeries([
        {
          name: "Total Embryo Graded",
          data: [20, 30, 35, 40, 35, 50]  
        }
      ]);
    }
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <span className="activitytext">Activity</span>
        </div>
        <div>
          <span className="weektext">Week</span>
          
        </div>
      </div>
      <div className="stackedbtn">
        <button
          className={`stacked-button ${activeButton === "patients" ? "active" : ""}`}
          onClick={() => handleButtonClick("patients")}
        >
          <img src={Frame} alt="" />
          <span className="button-icon">  Total Patients</span>
        </button>

        <button
          className={`stacked-button ${activeButton === "embryo" ? "active" : ""}`}
          onClick={() => handleButtonClick("embryo")}
        >
          <img src={Frame} alt="" />
          <span className="button-icon">Total Embryo Graded</span>
        </button>
      </div>
      <div id="chart">
        <ReactApexChart
          className="bar-chart"
          options={eChart2.options}
          series={chartSeries}  
          height={410}
          type="bar"
        />
      </div>
    </>
  );
}

export default EChart2;
