import {Chart as ChartJS,ArcElement,Tooltip,Legend} from 'chart.js';
import {Pie} from 'react-chartjs-2';

import CHART_DATA from 'data/ChartData';

import './Chart.css';

ChartJS.register(ArcElement,Tooltip,Legend);

const data={
    labels: CHART_DATA.map(chart=>chart.month),
    datasets: [{
        label: `${new Date().getFullYear()} 營收`,
        data: CHART_DATA.map(chart=>chart.revenue),
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
};

const PieChart=()=>{
    return (
        <div>
            <h2 className="chart-title">Pie</h2>
            <Pie data={data} />
        </div>
    );
}

export default PieChart;