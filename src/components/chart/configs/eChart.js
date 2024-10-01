const eChart = {
  series: [
    {
      name: "Sales",
      data: [450, 200, 100, 220, 500, 100],
      color: "#F7F3FF",
    },
  ],

  options: {
    chart: {
      type: "bar",
      width: "100%",
      height: "auto",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        borderRadius: 10,
        distributed: false,  
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["transparent"],
    },
    grid: {
      show: false,
      borderColor: "#ccc",
      strokeDashArray: 2,
    },
    xaxis: {
      title: {
        text: 'SART AGE',
        margin: 10,
        offsetX: 0,
        offsetY: -10,
        style: {
          fontSize:  '12px',
          fontWeight:  '400',
          fontFamily:  'Poppins',
          color:  '#4A5157'
        },
      },
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      labels: {
        show: true,
        align: "right",
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: ["#4A5157", "#4A5157", "#4A5157", "#4A5157", "#4A5157", "#4A5157"],
        },
      },
      axisBorder: {
        show: true,
        color: '#f2f2f3',
      },
    },
    yaxis: {
      title: {
        text: 'Patients',
        style: {
          fontSize:  '12px',
          fontWeight:  '400',
          fontFamily:  'Poppins',
          color:  '#4A5157'
        },
      },
      labels: {
        show: true,
        align: "right",
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: ["#4A5157", "#4A5157", "#4A5157", "#4A5157", "#4A5157", "#4A5157"],
        },
      },
      axisBorder: {
        show: true,
        color: '#f2f2f3',
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
    states: {
      hover: {
        filter: {
          type: "none", 
        },
      },
    },
  },
};

export default eChart;
