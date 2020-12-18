import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Board from './components/Board';

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
