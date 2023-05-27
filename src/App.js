import styles from "./App.module.css";
import FunctCounter from "./TASK 12/counter";
import FormUser from "./TASK 12/FormUser";

function App() {
  return (
    <div className={styles.App}>
      <FormUser />
      <FunctCounter />
    </div>
  );
}

export default App;
