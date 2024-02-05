import Link from "next/link";
// import { useRouter } from "next/router";

export async function getStaticProps(context) {
  //extrai os parâmetros da url
  const { params } = context;

  const data = await fetch(
    "https://jsonplaceholder.typicode.com/todos/" + params.todoId
  );

  const todo = await data.json();

  //retorna o objeto com as propriedades que serão passadas para a página
  return {
    props: { todo },
  };
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await response.json();

  const paths = todos.map((todo) => {
    return {
      params: { todoId: `${todo.id}` },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

//pego o objeto que foi passado como props
export default function Todo({ todo }) {
  //serve para pegar os parâmetros da url
  //const router = useRouter();
  //associa ao nome do arquivo next.js o valor da variável todoId
  //const id = router.query.todoId;

  return (
    <>
      <Link href="/todos">Voltar</Link>

      <h1>Todo: {todo.id}</h1>
      <br></br>
      <p>Titúlo: {todo.title}</p>
    </>
  );
}
