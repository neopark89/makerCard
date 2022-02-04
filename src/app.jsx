import React from "react";
import styles from "./app.module.css";
import Login from "./components/login/login";

function App({ authService }) {
  return (
    <p className={styles.app}>
      <Login authService={authService} />
    </p>
  );
}

export default App;
