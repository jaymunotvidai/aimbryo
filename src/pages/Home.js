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

import {
  Card,
  Col,
  Row,
  Typography,

} from "antd";


import Echart from "../components/chart/EChart";
import RedialChart from "../components/chart/Radialchart";
import EChart2 from "../components/chart/Echart2";
import EChart3 from "../components/chart/EChart3";
import Overview from "../components/chart/Overview";
import Patient from "../assets/images/profile-2user.svg";
import Group from "../assets/images/Group 92262 (1).svg";
import Useradd from "../assets/images/user-add.svg";
import Clock from "../assets/images/clock.svg";
function Home() {
  const { Title, Text } = Typography;

 
  const count = [
    {
      today: "Total Patients",
      title: "1000",
      persent: "+30%",
      icon: Patient,
      bnb: "bnb2",
    },
    {
      today: "Total Embryo Graded",
      title: "3000",
      persent: "+20%",
      icon: Group,
      bnb: "bnb2",
    },
    {
      today: "Avg #Emb Graded/Patient",
      title: "06",
      persent: "-20%",
      icon: Useradd,
      bnb: "redtext",
    },
    {
      today: "Avg Turnaround Time",
      title: "123 Hrs",
      persent: "10%",
      icon: Clock,
      bnb: "bnb2",
    },
  ];

 

  return (
    <>
      <div className="layout-content">
        <Row className="rowgap-vbox" gutter={[24, 0]}>
          {count.map((c, index) => (
            <Col
              key={index}
              xs={24}
              sm={24}
              md={12}
              lg={6}
              xl={6}
              className="mb-24"
            >
              <Card bordered={false} className="criclebox ">
                <div className="number">
                  <Row align="middle" gutter={[24, 0]}>
                    <Col xs={5}>
                      <div className="icon-box"><img src={c.icon} alt=''/></div>
                    </Col>
                    <Col xs={18}>
                      <Title level={3}>
                        {c.title} <small className={c.bnb}></small>
                      </Title>
                      <span>{c.today}</span>

                    </Col>

                  </Row>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <Row gutter={[24, 0]}>
          {/* Left column for Echart and LineChart */}
          <Col xs={24} sm={24} md={24} lg={7} xl={7} className="mb-24">
            <Card bordered={false} className="criclebox">
            <Overview/>

              {/* Echart component */}
            </Card>
            <Card bordered={false} className="criclebox" style={{ marginTop: '12px' }}>
              {/* LineChart component */}
              <EChart2 />
            </Card>
          </Col>

          {/* Right column for the two cards */}
          <Col xs={24} sm={24} md={24} lg={17} xl={17} className="mb-24" >
            {/* First card - shown twice */}
            <div className="d-flex w-100">
              <Card bordered={false} className="criclebox cardbody h-full" style={{ width: '50%',marginRight: '12px', paddingLeft:'12px', height:'500px' }}>
              <Echart />
              </Card>

              {/* Repeat the first card */}
              <Card bordered={false} className="criclebox cardbody h-full" style={{ width: '50%' , height:'500px' }}>
              <RedialChart />
               
              </Card>
            </div>


            {/* Second card */}
            <Card bordered={false} className="criclebox" style={{ marginTop: '12px', }}>
            <EChart3 />
              
            </Card>
          </Col>
        </Row>


      </div>
    </>
  );
}

export default Home;
