import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GridFormat from './components/GridFormat';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<GridFormat/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
