import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Sidebar from './Sidebar';
import Board from './Board';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <Board />
      </div>
    </BrowserRouter>
  );
}

export default App;
