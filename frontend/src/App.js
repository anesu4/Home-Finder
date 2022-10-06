import logo from './logo.svg';
import './App.css';
import Heatmap from './components/heatmap/heatmap';
import Recommendations from './components/recommendations/recommendations';
import Results from './components/results/results';

function App() {
  return (
    <div className="App">
      // HeatMap Section
      <Heatmap></Heatmap>

      // Get Recommendations
      <Recommendations></Recommendations>

      // Get Results
      <Results></Results>

    </div>
  );
}

export default App;
