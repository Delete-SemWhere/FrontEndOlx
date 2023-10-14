import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './styles/App.css';
import Home from'./pages/home'
import ProductPage from'./pages/productPage'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product" element={<ProductPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
