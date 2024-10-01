import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Typography, Tabs } from "antd";
import radialChart from "./configs/radialChart";

function RedialChart() {
    const { Title } = Typography;
    const [chartSeries, setChartSeries] = useState([95, 70, 30, 35]);

    const onChange = (key) => {
        switch (key) {
            case '1':
                setChartSeries([95, 70, 30, 35]);  
                break;
            case '2':
                setChartSeries([60, 40, 50, 80]); 
                break;
            case '3':
                setChartSeries([40, 90, 20, 60]);  
                break;
            default:
                setChartSeries([95, 70, 30, 35]);  
        }
    };

    const items = [
        {
            key: '1',
            label: 'Egg',
        },
        {
            key: '2',
            label: 'Sperm',
        },
        {
            key: '3',
            label: 'Both',
        },
    ];

    return (
        <>
            <div className="chart-container">
                <div>
                    <Title level={5} className="header-name">Source</Title>
                </div>

                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />

                <div className="maindiv">
                    <div className="innerdiv">
                        <span className="spanmain" style={{ backgroundColor: 'rgb(55, 197, 119)' }}></span>
                        Fresh Self
                    </div>
                    <div className="innerdiv">
                        <span className="spanmain" style={{ backgroundColor: 'rgb(55, 104, 197)' }}></span>
                        Fresh Donor
                    </div>
                    <div className="innerdiv">
                        <span className="spanmain" style={{ backgroundColor: 'rgb(236, 157, 62)' }}></span>
                        Frozen Self
                    </div>
                    <div className="innerdiv">
                        <span className="spanmain" style={{ backgroundColor: 'rgb(197, 176, 55)' }}></span>
                        Frozen Donor
                    </div>
                </div>
            </div>

            <ReactApexChart
                className="full-width"
                options={radialChart.options} 
                series={chartSeries}           
                type="radialBar"              
                height={350}
                width={"100%"}
            />
        </>
    );
}

export default RedialChart;
