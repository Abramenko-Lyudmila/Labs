import { useState } from "react";
import { useQueue } from "../hooks/useQueue";

export const QueuePage = () => {
  const { items, enqueue, dequeue, peek, clear, length } = useQueue<string>();

  const [input, setInput] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <h1>Queue (FIFO)</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Введите элемент"
      />

      <button onClick={() => enqueue(input)}>Добавить</button>
      <button onClick={dequeue}>Удалить первый</button>
      <button onClick={clear}>Очистить</button>

      <h3>Длина: {length}</h3>
      <h3>Первый элемент: {peek()}</h3>

      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
