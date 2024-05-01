import Link from "next/link";
import styles from './styles.module.css';
import CreateTodo from "./CreateTodo";

interface Item {
  id: number;
  task: string;
  is_complete: boolean;
}

const getTodos = async () => {
  const res = await fetch('http://127.0.0.1:5000/');
  return res.json();
}

const Todos = async () => {
  const data = await getTodos();

  return (
    <section>
      <h2>Here are all the TODOs</h2>
      {data.map((item: Item) => (
        <div key={item.id}>
          <h4>{item.task}</h4>
          <p>{item.is_complete ? 'Completed' : 'In Progress'}</p>
          <hr />
        </div>
      ))}
      <CreateTodo />
    </section>
  );
}

export default Todos;