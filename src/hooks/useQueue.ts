import { useState } from "react";

/*Антипаттерн:
Я НЕ використовую useMemo або useCallback для методів черги,
тому що операції enqueue/dequeue прості та не потребують оптимізації.
Додавання мемоізації тут лише ускладнить код без користі.*/

export const useQueue = <T>() => {
  const [items, setItems] = useState<T[]>([]);

  // добавить в очередь
  const enqueue = (item: T) => {
    setItems((prev) => [...prev, item]);
  };

  // удалить первый элемент
  const dequeue = () => {
    setItems((prev) => prev.slice(1));
  };

  // посмотреть первый элемент
  const peek = () => {
    return items[0];
  };

  // очистить очередь
  const clear = () => {
    setItems([]);
  };

  return {
    items,
    enqueue,
    dequeue,
    peek,
    clear,
    length: items.length,
  };
};