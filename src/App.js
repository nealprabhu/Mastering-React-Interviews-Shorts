import "./styles.css";
import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const [count, setCount] = useState(10);
  const trigger = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (values) => {
        if (values[0].isIntersecting) setCount((prev) => prev + 10);
      },
      {
        threshold: 1.0,
      }
    );
    observer.observe(trigger.current);

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  const elements = [];
  for (let i = 0; i < count; i++) {
    elements.push(
      <div id="card" key={i}>
        {i + 1}
      </div>
    );
  }

  return (
    <div className="App">
      {elements}
      <div
        ref={trigger}
        style={{ backgroundColor: "red", height: "200px" }}
      ></div>
    </div>
  );
}
