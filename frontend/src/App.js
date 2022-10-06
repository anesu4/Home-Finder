// Import Bootstrap
import Container from 'react-bootstrap/Container';

// Import Components
import Header from './components/header';
import Heatmap from './components/heatmap/heatmap';
import Recommendations from './components/recommendations/recommendations';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Header />

      {/* HeatMap Section */}
      <Container>
        <Heatmap />
      </Container>

      {/* Get Recommendations */}
      <Container>
        <Recommendations />
      </Container>
      
      <Footer />
    </div>
  );
}

export default App;
