import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(3); // -> array 1 posi = valor // 2 posi funcion para modificarlo

  return (
    <div>
      <div>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
        <button onClick={() => setCount(count - 1)}>Disminuir</button>
      </div>

      <div>Numero = {count}</div>

      {
        count >= 5
          ? <p>Este número es super alto</p>
          : <p>Este número es muy pequeño</p>
      }
    </div>
  )
}

export default Counter;