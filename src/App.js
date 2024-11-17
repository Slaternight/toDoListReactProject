import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import './App.css';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodoItems = [
  { text: 'segundo texto', completed: true },
  { text: 'tercer texto', completed: false },
  { text: 'cuarto texto', completed: false },
  { text: 'quinto texto', completed: false },
];

function App() {
  return (
    // <div className="App"> el className es como el class de html para jsx que es lo que se esta usando aca, y se elimina este div por que se quiere usar solo un div, el del html y no dos div
      <React.Fragment>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        { defaultTodoItems.map(todo => (

          <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          />
        )) }
        {/* {[<TodoCounter />,<TodoSearch />]} */}
      </TodoList>
      
      
      <CreateTodoButton />
      </React.Fragment>
  );
}



export default App;
