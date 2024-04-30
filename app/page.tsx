import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <main className={styles.main}>
      <h1>This is the client. Built with Next.JS</h1>
      <Link href="/todos">Go to the App</Link>
    </main>
  );
}

export default Home;
