import React from "react";
import styles from "./ErrorPage.module.css";

function ErrorPage() {
  return (
    <div className={styles.error}>
      <p> 😤 The desired page was not found , please try again </p>
    </div>
  );
}

export default ErrorPage;
