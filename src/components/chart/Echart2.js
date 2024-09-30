
import ReactApexChart from "react-apexcharts";
import eChart2 from "./configs/eChart2";

function EChart2() {

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
        <button className="stacked-button">
          <span className="button-icon">
            Total Patients
          </span>
        </button>
        <button className="stacked-button">
          <span className="button-icon">
            Total Embryo Graded
          </span>
        </button>
      </div>
      <div id="chart">
        <ReactApexChart
          className="bar-chart"
          options={eChart2.options}
          series={eChart2.series}
          height={410}
          type="bar"
        />
      </div>

    </>
  );
}

export default EChart2;
