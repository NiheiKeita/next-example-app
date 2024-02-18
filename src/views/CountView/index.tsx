import React from "react";
import { useCountView } from "./hooks";

export const CountView = React.memo(() => {
  const { count, addCount } = useCountView();
  return (
    <div>
      <p>{count}</p>
      <button className="bg-red-500 px-2 py-4 hover:bg-red-200" onClick={addCount}>
        カウントアップ
      </button>
    </div>
  );
});
CountView.displayName = "CountView";
