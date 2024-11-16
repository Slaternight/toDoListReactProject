import { TodoCounter } from './TodoCounter';
import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>
      
      
      <CreateTodoButton />
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
