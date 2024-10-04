const eChart3 = {
  series: [
    {
      name: "Day 3",
      data: [150, 200, 100, 220, 300, 100],
      color: "#F1EBFF",
    },
    {
      name: "Day 4",
      data: [200, 150, 150, 180, 250, 200],
      color: "#E4D7FF",
    },
    {
      name: "Day 5",
      data: [100, 120, 80, 130, 150, 120],
      color: "#C7B2F2",
    },
    {
      name: "Day 6",
      data: [50, 80, 60, 90, 120, 80],
      color: "#9E7FE1",
    },
    {
      name: "Day 7",
      data: [50, 80, 60, 90, 120, 80],
      color: "#7C67A8",
    },
  ],

  options: {
    chart: {
      type: "bar",
      width: "100%",
      height: "auto",
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: "30%",
        borderRadius: 7,
        borderRadiusApplication: "around",
        borderRadiusWhenStacked: 'all',
        barHeight: "70%",
      },
    },
    stroke: {
      show: true,
      width: 5,
      lineCap: 'round',
      colors: ["#fff"],
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
      borderColor: "#ccc",
      strokeDashArray: 2,
    },
    xaxis: {
      categories: ["Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      labels: {
        show: false,
      },
      axisBorder: {
        show: true,
        color: "#f2f2f3",
      },
    },
    yaxis: {
      title: {
        text: 'Days',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        style: {
          fontSize: '12px',
          fontWeight: '400',
          fontFamily: 'Poppins',
          color: '#4A5157',
        },
      },
      categories: ["Product A", "Product B", "Product C", "Product D", "Product E"],
      labels: {
        show: true,
        align: "right",
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: ["#4A5157", "#4A5157", "#4A5157", "#4A5157", "#4A5157"],
          fontSize: "14px",
        },
      },
      axisBorder: {
        show: true,
        color: "#f2f2f3",
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
    legend: {
      show: false,
    },
  },
};

export default eChart3;
