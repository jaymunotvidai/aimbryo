const radialChart = {
    series: [95, 70, 30, 35], 
    options: {
        chart: {
            type: 'radialBar',
            height: 350,
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '35%', 
                    background: '#f0f0f0',  
                },
                track: {
                    background: '#fafafa',  
                    strokeWidth: '100%',  
                },
                dataLabels: {
                    show: false,  // Hide labels that appear on hover
                },
            },
        },
        labels: ['Fresh Self', 'Fresh Donor' , 'Frozen Self' , 'Frozen Donor'],  
        fill: {
            colors: ['#37C577', '#3768C5', '#EC9D3E', '#C5B037'], 
        },
        stroke: {
            lineCap: 'round'
          },
        legend: {
            show: false,
            position: 'top',  
        },
        tooltip: {
            enabled: false, 
        },
    },
};

export default radialChart;
