import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailPage from './components/DetailPage/DetailPage';
import Header from './components/TemporaryHeader';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
