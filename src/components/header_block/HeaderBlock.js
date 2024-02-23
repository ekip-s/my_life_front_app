import styles from "./HeaderBlock.module.css";

const HeaderBlock = (props) => {
  const onChangeElemHandler = (elem) => {
    props.onClick(elem.target.value);
  };

  return (
    <div className={styles["main_header"]}>
      <div className={styles["logo_and_menu"]}>
        <div className={styles.logo}>
          <h2>Life Service App</h2>
        </div>
        <div className={styles.menu}>
          <select onChange={onChangeElemHandler}>
            <option>Кредиты и Депозиты</option>
            <option>Финансовый статус</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default HeaderBlock;
//Oswald
//Playfair Display
//Arvo
