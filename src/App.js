import {BrowserRouter, Route, Routes} from 'react-router'
import './App.css';
import Home from './pages/home/Home';
import { CardProvider } from './context/cardContext/CardContext';
import DetailView from './pages/detailView/DetailView';
import Favourite from './pages/favourite/Favourite';

function App() {
  return (
    <CardProvider>
      <BrowserRouter>
        <div className="app-container">
          <h1>Company Heading</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:index" element={<DetailView />} />
            <Route path="/favourite" element={<Favourite />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CardProvider>
  );
}

export default App;
