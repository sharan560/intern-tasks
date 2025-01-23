import React, { useRef, useState } from "react";
import "./App.css";
import Weather from "./Weather";


const App = () => {
  // const inputRef = useRef(null); 
  // const timerRef = useRef(null); 
  // const [timeLeft, setTimeLeft] = useState(10); 
  // const [isTimerRunning, setIsTimerRunning] = useState(false); 

  

  // React.useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

 
  // const startTimer = () => {
  //   if (isTimerRunning) return; 
  //   setIsTimerRunning(true);
  //   timerRef.current = setInterval(() => {
  //     setTimeLeft((prevTime) => {
  //       if (prevTime <= 1) {
  //         clearInterval(timerRef.current);
  //         setIsTimerRunning(false);
  //         return 0;
  //       }
  //       return prevTime - 1;
  //     });
  //   }, 1000);
  // };

 
  // const stopTimer = () => {
  //   clearInterval(timerRef.current);
  //   setIsTimerRunning(false);
  // };


  // const resetTimer = () => {
  //   clearInterval(timerRef.current);
  //   setTimeLeft(10);
  //   setIsTimerRunning(false);
  // };

 
  // const focusInput = () => {
  //   inputRef.current.focus();
  // };

  // return (
  //   <div className="App">
  //     <h1>Magical Timer and Input Box</h1>

  //     {/* Input Box Section */}
  //     <div className="input-section">
  //       <input
  //         type="text"
  //         ref={inputRef}
  //         placeholder="Type something..."
  //       />
  //       <button onClick={focusInput}>Focus Box</button>
  //     </div>

  
  //     <div className="timer-section">
  //     <h2>Timer: {timeLeft > 0 ? `${timeLeft}s` : <span className="times-up">Time's Up!</span>}</h2>
  //       <button onClick={startTimer}>Start Timer</button>
  //       <button onClick={stopTimer}>Stop Timer</button>
  //       <button onClick={resetTimer}>Reset Timer</button>
  //     </div>
  //   </div>
  //);

  <div>
   <Weather/>
  </div>
};

export default App;