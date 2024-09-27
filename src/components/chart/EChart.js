/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import ReactApexChart from "react-apexcharts";
import eChart from "./configs/eChart";
import { Typography } from "antd";

function EChart() {
  const { Title } = Typography;
 

  return (
    <>
      <div id="chart">
      <div>
                    <Title level={5} className="header-name">Age Distribution</Title>
                </div>
        <ReactApexChart
          className="bar-chart"
          options={eChart.options}
          series={eChart.series}
          height={450}
          type="bar"
        />
      </div>
   
    </>
  );
}

export default EChart;
