import styles from "./HeaderBlock.module.css";

const HeaderBlock = (props) => {
  const onChangeElemHandler = (elem) => {
    console.log(elem.target.innerText);
    props.onClick(elem.target.innerText);
  };

  return (
    <div className={styles["main_header"]}>
      <div className={styles["logo_and_menu"]}>
        <div className={styles.logo}>
          <h2>Life Service App</h2>
        </div>
        <div className={styles.menu}>
          <button onClick={onChangeElemHandler}>Кредиты и Депозиты</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBlock;
//Oswald
//Playfair Display
//Arvo
