import "./App.css";
import { useCallback, useState } from "react";

export function processNumbers(n1, n2, divisor) {
  if (n2 < n1) {
    const aux = n2;
    n2 = n1;
    n1 = aux;
  }
  let total = 0;
  for (let i = n1; i <= n2; ++i) {
    if (i % divisor === 0) {
      total++;
    }
  }
  return total;
}

const divisibleBy = 3;

function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const total = processNumbers(firstNumber, secondNumber, divisibleBy);
      alert(total);
    },
    [firstNumber, secondNumber]
  );

  return (
    <main>
      <form onSubmit={onSubmit} data-testid="form">
        <fieldset>
          <label htmlFor="first-number">First number</label>
          <input
            id="first-number"
            onChange={(e) => {
              setFirstNumber(parseInt(e.target.value));
            }}
            type="number"
            min={1}
            step={1}
            autoFocus
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="second-number">Second number</label>
          <input
            id="second-number"
            onChange={(e) => {
              setSecondNumber(parseInt(e.target.value));
            }}
            type="number"
            min={1}
            step={1}
            required
          />
        </fieldset>
        <button>Process</button>
      </form>
    </main>
  );
}

export default App;
