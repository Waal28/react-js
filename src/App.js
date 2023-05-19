import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import FormText from "./components/4.router/FormText";
import Nilai from "./components/4.router/Nilai";
import CounterProvider from "./components/4.router/context/CounterProvider";
import Counter from "./components/4.router/counter";
import LuasLingkaran from "./components/4.router/LuasLingkaran";
import LuasSegitiga from "./components/4.router/LuasSegitiga";
import CounterTwoNumber from "./components/3.hooks/CounterTwoNumber";
import Layout from "./components/4.router/layout";
import FormLogin from "./components/4.router/FormLogin";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <LuasSegitiga />
            </Layout>
          }
        />
        <Route
          path="/luas-lingkaran"
          element={
            <Layout>
              <LuasLingkaran />
            </Layout>
          }
        />
        <Route
          path="/counter"
          element={
            <Layout>
              <Counter />
            </Layout>
          }
        />
        <Route
          path="/nilai"
          element={
            <Layout>
              <Nilai />
            </Layout>
          }
        />
        <Route
          path="/countertwonumber"
          element={
            <Layout>
              <CounterTwoNumber />
            </Layout>
          }
        />
        <Route
          path="/counterprovider"
          element={
            <Layout>
              <CounterProvider />
            </Layout>
          }
        />
        <Route
          path="/formtext"
          element={
            <Layout>
              <FormText />
            </Layout>
          }
        />
        <Route path="/login" element={<FormLogin />} />
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
