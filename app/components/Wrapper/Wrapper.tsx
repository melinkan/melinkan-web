import styles from "./Wrapper.module.css";

export function Wrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={styles.wrapper}>{children}</div>;
}
