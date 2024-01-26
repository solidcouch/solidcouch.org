import Link from "next/link";
import styles from "./404.module.scss";

const NotFound = () => (
  <div className={styles.wrapper}>
    <div className={styles.description}>There is nothing here.</div>
    <div>
      <Link href="/">Return to main page.</Link>
    </div>
  </div>
);

export default NotFound;
