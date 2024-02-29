import React, { useEffect, useRef, useState } from "react";
/*
 Penggunaan useRef yang menampung value yang akan di mutasi (mutableRef)
 */
const MutableRef = () => {
  const [timer, setTimer] = useState(0);

  /*
  useEffect utk membuat interval yang menambah state timer setiap satu detik. 

   useEffect(() => {
    const timerInterval = setInterval(
      () => setTimer((prevTimer) => prevTimer + 1),
      1000
    );
    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  Semuanya berjalan lancar sampai kita mau menambahkan fitur untuk stop timernya yang dimana memerlukan kita untuk mengakses IntervalId(timerInterval) di handlerFunction kita.
  Maka kita dapat menggunakan useRef untuk menampung IntervalId tersebut
  */

  // ref tanpa initial value yang nantinya akan kita mutate didalam useEffect
  const intervalRef = useRef<number | null>(null);
  const startTimer = () => {
    intervalRef.current = window.setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };
  const stopTimer = () => {
    // Jika intervalRef.current tdk undefined jalanin yg kanan
    intervalRef.current && window.clearInterval(intervalRef.current);
  };
  useEffect(() => {
    startTimer();
    return () => {
      return stopTimer();
    };
  }, []);

  return (
    <div>
      <h1>Timer Count: {timer}</h1>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
};

export default MutableRef;
