import styles from "./App.module.css";
import HeaderBlock from "./components/header_block/HeaderBlock";
import React, { useState } from "react";
import Footer from "./components/footer_block/Footer";
import ContentMaster from "./components/content/content_master/ContentMaster";

function App() {
  const [selectOption, setSelectOption] = useState("Кредиты и Депозиты");

  const selectOptionHandler = (select) => {
    setSelectOption(() => {
      return select;
    });
  };

  return (
    <div className={styles.App}>
      <header className={styles["app-header"]}>
        <HeaderBlock onClick={selectOptionHandler} />
      </header>
      <main className={styles["app-body"]}>
        <ContentMaster option={selectOption} />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
