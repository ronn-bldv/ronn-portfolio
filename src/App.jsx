import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Pagenotfound } from './pages/pagenotfound';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </Router>
  );
}

export default App;
