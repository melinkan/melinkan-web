import React from "react";
import styles from "./Wrapper.module.css";

export function Wrapper({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return <div className={`${styles.wrapper} ${className}`}>{children}</div>;
}
