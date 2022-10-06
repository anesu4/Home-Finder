// import logo from './logo.svg';
import './App.css';

// Import Bootstrap
import Container from 'react-bootstrap/Container';

// Import Components
import Header from './components/header';
import Heatmap from './components/heatmap/heatmap';
import Recommendations from './components/recommendations/recommendations';
import Results from './components/results/results';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />

      {/* HeatMap Section */}
      <Container className='heatmap'>
        <Heatmap />
      </Container>

      {/* Get Recommendations */}
      <Container className='recommendations'>
        <Recommendations />
      </Container>

      {/* Get Results */}
      <Container className='results'>
        <Results />
      </Container>

      <Footer />
    </div>
  );
}

export default App;
