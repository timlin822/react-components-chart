import BarChart from 'components/chart/BarChart';
import LineChart from 'components/chart/LineChart';
import DoughnutChart from 'components/chart/DoughnutChart';
import PieChart from 'components/chart/PieChart';

import './App.css';

function App() {
  return (
    <section className="section-padding bg-height">
      <div className="container container-padding">
        <div className="chart-grid">
          <BarChart />
          <LineChart />
          <DoughnutChart />
          <PieChart />
        </div>
      </div>
    </section>
  );
}

export default App;