import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

import styles from "./page.module.css";

export default function NotFound() {
  return (
    <main>
      <div className={styles.notFound}>
        <div>
          <p className={styles.errorNo}>404</p>
          <p className={styles.errorText}>Page Not Found</p>
        </div>
        <Link className={styles.button} href="/">
          {" "}
          <BiArrowBack />
          Back to Home Page
        </Link>
      </div>
    </main>
  );
}
