/*
useRef can be used to create a generic container which can hold a mutable value similar to instance properties on a class component. This generic container doesnot causes rerender when the value changes. It also remembers the stored data even other state variables cause a rerender on it's component.

Demo ini adalah contoh kasus dimana menggunakan useRef untuk clear interval timer dari sebuah event handler
*/
import React, { useEffect, useRef } from "react";

const DomRef = () => {
  // Kalo kek gini error karna kita bakal buat HTMLInputElement focus pada pertama render, namun Typescript tidak tau tipe apa yang menggunakan .focus()
  //   const inputRef = useRef(null!);

  //   Maka kita kasi type dan value null! yang menunjukkan pada saat runtime valuenya tidak akan null
  const inputRef = useRef<HTMLInputElement>(null!);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default DomRef;
