import './App.css';
import { 
  BrowserRouter,
  Switch,
  Route,
  Link,
  // Redirect,
  // useHistory,
  // useLocation
} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Board from './components/Board';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <DndProvider backend={HTML5Backend}>
          <Board />
        </DndProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
