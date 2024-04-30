import Link from "next/link";
import styles from "./styles.module.css";

const TodosLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/api/todos/create">New TODO</Link>
        <Link href="/">Go Home</Link>
      </nav>
      {children}
    </>
  );
}

export default TodosLayout;