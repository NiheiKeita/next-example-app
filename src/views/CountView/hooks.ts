import { useState } from "react";

export const useCountView = () => {
  const [count, setCount] = useState<number>(0);
  const addCount = () => {
    setCount(count + 1);
  };
  if(count > 10){
    setCount(count + 10);
  }
  return {
    count,
    addCount,
  };
};
