import logo from './logo.svg';
import './App.css';
import Heatmap from './components/heatmap/heatmap';
import Recommendations from './components/recommendations/recommendations';
import Results from './components/results/results';

function App() {
  return (
    <div className="App">
      {/* HeatMap Section */}
      <h1> HelloWorld</h1>
      <Heatmap />

      {/* Get Recommendations */}
      <Recommendations />

      {/* Get Results */}
      <Results />

    </div>
  );
}

export default App;
