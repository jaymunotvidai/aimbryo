import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import eChart3 from "./configs/eChart3";
import { Typography, Tabs } from "antd";

function EChart3() {
    const { Title } = Typography;
    const [chartSeries, setChartSeries] = useState(eChart3.series);

    const onChange = (key) => {
        switch (key) {
            case '1': 
                setChartSeries([
                    { name: "Product A", data: [150, 180, 200, 220, 260, 180], color: "#F1EBFF" },
                    { name: "Product B", data: [100, 150, 170, 130, 210, 140], color: "#E4D7FF" },
                    { name: "Product C", data: [120, 130, 110, 140, 100, 90], color: "#C7B2F2" },
                    { name: "Product D", data: [90, 80, 60, 70, 110, 70], color: "#9E7FE1" },
                    { name: "Product E", data: [80, 60, 50, 40, 90, 50], color: "#7C67A8" },
                ]);
                break;
            case '2': 
                setChartSeries([
                    { name: "Product A", data: [220, 300, 180, 270, 320, 240], color: "#F1EBFF" },
                    { name: "Product B", data: [190, 210, 250, 230, 290, 260], color: "#E4D7FF" },
                    { name: "Product C", data: [150, 170, 160, 190, 150, 130], color: "#C7B2F2" },
                    { name: "Product D", data: [100, 110, 140, 130, 170, 120], color: "#9E7FE1" },
                    { name: "Product E", data: [60, 70, 100, 80, 110, 90], color: "#7C67A8" },
                ]);
                break;
            case '3': 
                setChartSeries([
                    { name: "Product A", data: [180, 150, 190, 250, 240, 210], color: "#F1EBFF" },
                    { name: "Product B", data: [140, 130, 160, 180, 220, 170], color: "#E4D7FF" },
                    { name: "Product C", data: [130, 120, 100, 110, 160, 140], color: "#C7B2F2" },
                    { name: "Product D", data: [70, 60, 90, 100, 130, 110], color: "#9E7FE1" },
                    { name: "Product E", data: [50, 40, 70, 80, 90, 60], color: "#7C67A8" },
                ]);
                break;
            case '4':  
                setChartSeries([
                    { name: "Product A", data: [210, 230, 200, 220, 260, 190], color: "#F1EBFF" },
                    { name: "Product B", data: [180, 160, 170, 150, 200, 140], color: "#E4D7FF" },
                    { name: "Product C", data: [120, 110, 90, 100, 140, 110], color: "#C7B2F2" },
                    { name: "Product D", data: [80, 70, 60, 50, 100, 80], color: "#9E7FE1" },
                    { name: "Product E", data: [70, 50, 40, 30, 80, 60], color: "#7C67A8" },
                ]);
                break;
            case '5': 
                setChartSeries([
                    { name: "Product A", data: [240, 260, 220, 270, 310, 260], color: "#F1EBFF" },
                    { name: "Product B", data: [200, 220, 190, 230, 280, 230], color: "#E4D7FF" },
                    { name: "Product C", data: [170, 180, 150, 160, 210, 170], color: "#C7B2F2" },
                    { name: "Product D", data: [120, 140, 100, 130, 160, 120], color: "#9E7FE1" },
                    { name: "Product E", data: [80, 90, 60, 80, 120, 90], color: "#7C67A8" },
                ]);
                break;
            case '6':  
                setChartSeries([
                    { name: "Product A", data: [270, 310, 260, 330, 350, 320], color: "#F1EBFF" },
                    { name: "Product B", data: [220, 240, 250, 270, 310, 290], color: "#E4D7FF" },
                    { name: "Product C", data: [190, 200, 180, 220, 250, 210], color: "#C7B2F2" },
                    { name: "Product D", data: [140, 160, 130, 150, 190, 160], color: "#9E7FE1" },
                    { name: "Product E", data: [100, 110, 90, 110, 140, 120], color: "#7C67A8" },
                ]);
                break;
            default:
                setChartSeries(eChart3.series); 
        }
    };

    const items = [
        { key: '1', label: 'Count' },
        { key: '2', label: 'Day' },
        { key: '3', label: 'Age' },
        { key: '4', label: 'Source' },
        { key: '5', label: 'Fertilization' },
        { key: '6', label: 'Protocol' },
    ];

    return (
        <>
            <div id="chart">
                <div className="chart-container">
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '30%' }}>
                            <Title level={5} className="header-name">Source</Title>
                        </div>
                        <div style={{ width: '70%' }}>
                            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                        </div>
                    </div>
                    <div className="maindiv2">
                        <div className="innerdiv">
                            <span className="spanmain" style={{ backgroundColor: '#F1EBFF' }}></span>
                            5AA
                        </div>
                        <div className="innerdiv">
                            <span className="spanmain" style={{ backgroundColor: '#E4D7FF' }}></span>
                            5AB
                        </div>
                        <div className="innerdiv">
                            <span className="spanmain" style={{ backgroundColor: '#C7B2F2' }}></span>
                            5BB
                        </div>
                        <div className="innerdiv">
                            <span className="spanmain" style={{ backgroundColor: '#9E7FE1' }}></span>
                            4AA
                        </div>
                        <div className="innerdiv">
                            <span className="spanmain" style={{ backgroundColor: '#7C67A8' }}></span>
                            4AB
                        </div>
                    </div>
                </div>
                <ReactApexChart
                    className="bar-chart"
                    options={eChart3.options}
                    series={chartSeries}
                    height={330}
                    type="bar"
                />
            </div>
        </>
    );
}

export default EChart3;
