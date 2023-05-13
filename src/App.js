import { useState } from "react";
import styles from "./App.module.css";
import CounterProvider from "./components/3.hooks/context/CounterProvider";
import Counter from "./components/3.hooks/counter";
import LuasLingkaran from "./components/3.hooks/LuasLingkaran";
import LuasSegitiga from "./components/3.hooks/LuasSegitiga";
import FunctCounter from "./components/2.state/funcCounter";

function App() {
  // const [massage, setMassage] = useState("");
  // const [counter, setCounter] = useState(0);

  // const handleReachMax = () => {
  //   setMassage("Udah Max");
  // };
  const [page, setPage] = useState("LuasSegitiga");
  return (
    <div className={styles.App}>
      <CounterProvider>
        <button onClick={() => setPage("LuasSegitiga")}>Luas Segitiga</button>
        <button onClick={() => setPage("LuasLingkaran")}>Luas Lingkaran</button>

        {page === "LuasSegitiga" ? <LuasSegitiga /> : <LuasLingkaran />}
        <Counter />
      </CounterProvider>
    </div>
  );
}

export default App;
