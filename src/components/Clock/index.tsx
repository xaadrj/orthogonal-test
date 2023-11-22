import React, { useState } from "react";

type MyFunctionProp = (Pos : number) => void;

interface ClockProps {
  Color: string;
  Position: MyFunctionProp
  // HandlePositon: 
}

const Clock: React.FC<ClockProps> = ({Color, Position }) => {
  const [Pos, setPos] = useState(1);
  const HandlePositon = () => {
    setPos(Pos+1)
    Pos === 3 && setPos(0);
    Position(Pos);
  }
  return (
    <div onClick={HandlePositon} className="w-10 h-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className={`${Color === 'minus' ? 'stroke-gray-400 hover:stroke-gray-800 ' : 'stroke-gray-100 hover:stroke-gray-300'} ease-in-out delay-75 transition-all stroke-2 cursor-pointer`}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );
}


export default Clock;