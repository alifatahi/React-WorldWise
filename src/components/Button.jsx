import styles from "./Button.module.css";

function Button({ children, onClick, type }) {
  return (
    // pass class based on type of Button
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
