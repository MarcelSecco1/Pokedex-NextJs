import Link from "next/link";
import styles from "../../styles/Todo.module.css";

export async function getStaticProps() {
  //busco as tarefas no jsonplaceholder
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await data.json();

  return {
    //envio o array de tarefas para a página
    props: {
      todos,
    },
  };
}
//recebo o array de tarefas
export default function Todos({ todos }) {
  return (
    <>
      <h1>Tarefas a fazer:</h1>
      <ul class={styles.todolist}>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} - <Link href={`/todos/${todo.id}`}>Ver</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
