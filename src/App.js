import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoItem />
      <TodoItem />
      <TodoItem />
      
    </div>
  );
}

function TodoItem(){
  return (
    <li>
      <span>V</span>
      <p>Primer texto</p>
      <span>X</span>
    </li>
  )
}

export default App;
