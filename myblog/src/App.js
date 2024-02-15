import './App.css';
import { Route,Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ViewData from './components/ViewData';
import AddData from './components/AddData';

function App() {
  return (
    <div className="App">
    
      <NavBar/>
      <Routes>
        <Route path='/' element={<ViewData/>}/>
        <Route path='/add' element={<AddData/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
