import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="border p-4 m-2 rounded">
      <p className="text-xl mb-2">Count: {count}</p>
      
      <button
        className="bg-blue-500 text-white px-3 py-1 rounded"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>

      <button
        className="bg-red-500 text-white px-3 py-1 rounded ml-2"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>


      <button
        className="bg-red-500 text-white px-3 py-1 rounded ml-2"
        onClick={() => setCount(0)}
      >
        Zurücksetzen
      </button>
    </div>
  );
}