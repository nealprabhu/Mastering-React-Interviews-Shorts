import "./styles.css";
import React, { useState, useRef, useEffect } from "react";

// // Way 1: using SetInterval only
// export default function App() {
//   const [count, setCount] = useState(0);
//   const [running, setRunning] = useState(false);
//   const timerRef = useRef(null);

//   const handleClick = () => {
//     setRunning((prev) => !prev);
//     if (running) {
//       clearInterval(timerRef.current);
//     } else {
//       timerRef.current = setInterval(() => {
//         setCount((prev) => prev + 1);
//       }, 1000);
//     }
//   };

//   return (
//     <div className="App">
//       <h2>Timer: {count}</h2>
//       <button onClick={handleClick}>{running ? "Stop" : "Start"}</button>
//     </div>
//   );
// }

// // Way 2: using SetTimeout and useEffect hook
export default function App() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (running) {
      timerRef.current = setTimeout(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [count, running]);

  const handleClick = () => {
    setRunning((prev) => !prev);
    if (!running) clearTimeout(timerRef.current);
  };

  return (
    <div className="App">
      <h2>Per Second Timer: {count}</h2>
      <button onClick={handleClick}>{running ? "Stop" : "Start"}</button>
    </div>
  );
}
// In setTimeout need to call count and running.
// also can be used var instead of useRef