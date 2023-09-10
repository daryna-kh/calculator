import { useState } from "react";
import styles from "./App.module.scss";

function App() {
  const [stringInput, setStringInput] = useState("");

  const handleButtonClick = (value: string | number) => {
    setStringInput((prevInput) => prevInput + value.toString());
  };

  const resultOperation = () => {
    const result = eval(stringInput);
    setStringInput(result);
  };

  return (
    <div className={styles.App}>
      <div className={styles.screen}>
        <div className={styles.screen_inner}>
          <input
            type="text"
            value={stringInput}
            className={styles.text_area}
            readOnly
          />
        </div>
      </div>

      <div className={styles.numbers}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "*", "/"].map(
          (index, value) => {
            return (
              <button
                className={styles.item}
                key={value}
                onClick={() => handleButtonClick(index)}
              >
                {index}
              </button>
            );
          }
        )}
        <button
          className={styles.item_equals}
          onClick={() => {
            resultOperation();
          }}
        >
          =
        </button>
        <button
          className={styles.item}
          onClick={() => {
            setStringInput("");
          }}
        >
          C
        </button>
      </div>
    </div>
  );
}

export default App;
