import React from "react";
import { useCountView } from "./hooks";

export const CountView = React.memo(() => {
  const { count, addCount } = useCountView();
  return (
    <div>
      <p className="bg-black">{count}</p>
      <button onClick={addCount}>カウントアップ</button>
    </div>
  );
});
CountView.displayName = "CountView";
