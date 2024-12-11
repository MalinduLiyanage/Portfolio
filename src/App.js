import Latest from './pages/Latest';
import About from './pages/About';
import FlutterProjects from './pages/Flutter';
import AndroidProjects from './pages/AndroidProjects';
import ReactProjects from './pages/ReactProjects';
import MachineLearning from './pages/MachineLearning';
import {
  HashRouter as Router,  
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="/Latest" element={<Latest />} />
        <Route exact path="/FlutterProjects" element={<FlutterProjects />} />
        <Route exact path="/AndroidProjects" element={<AndroidProjects />} />
        <Route exact path="/ReactProjects" element={<ReactProjects />} />
        <Route exact path="/MachineLearning" element={<MachineLearning />} />
      </Routes>
    </Router>
  );
}

export default App;
