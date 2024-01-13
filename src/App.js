import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<AllUser />} />
        <Route path="/add" element={<AddUser />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
