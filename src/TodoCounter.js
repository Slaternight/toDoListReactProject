function TodoCounter({ completed, total }) {
    return (
      <h1>Ha completado {completed} de {total} ToDos</h1>
    )
  }

  export { TodoCounter }; //Mejor practica es hacer export nombrados y no con default