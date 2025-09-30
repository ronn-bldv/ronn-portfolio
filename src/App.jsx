import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import { Home } from './pages/home';
import { Pagenotfound } from './pages/pagenotfound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='*' element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
