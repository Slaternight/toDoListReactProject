function TodoList(props){
    return (
      <ul>
        {props.children}
      </ul>
    )
  }

  export { TodoList };


//   function TodoList({ children }){
//     return (
//       <ul>
//         { children } // se puede usar de dos maneras el llamado de props
//       </ul>
//     )
//   }

//   export { TodoList };