import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import FunctCounter from "./components/6.redux/counter";
import FormUser from "./components/6.redux/FormUser";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<FormUser />} />
        <Route path="/result" element={<FunctCounter />} />
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
