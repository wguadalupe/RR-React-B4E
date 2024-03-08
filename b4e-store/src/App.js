import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:category" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;
