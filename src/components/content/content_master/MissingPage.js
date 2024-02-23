import styles from "./MissingPage.module.css";

const MissingPage = () => {
  return (
    <div className={styles["main_box"]}>
      <h3>Приветствую тебя в приложении Олень!</h3>
      <p>Выбери, что ты хочешь по жизни в верхнем меню.</p>
    </div>
  );
};

export default MissingPage;
