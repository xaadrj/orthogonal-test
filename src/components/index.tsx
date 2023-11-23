import { useState } from "react";
import Clock from "./Clock";

interface ClockConstainerProps {}

const ClockConstainer: React.FC<ClockConstainerProps> = () => {
  const [Color, setColor] = useState<string>("");
  const [Class, SetClass] = useState<string>("");
  const [Pos, setPos] = useState(0);
  // To set the theme
  const handleColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value);
  };

  const HandlePosition = (value: number) => {
    console.log(value);

    // Adding classes on click
    switch (value) {
      case 1:
        console.log("one");
        SetClass("w-60 translate-x-36");
        setPos(value);
        break;
      case 2:
        console.log("two");
        SetClass("translate-x-36 w-60 h-52");
        setPos(value);
        break;
      case 3:
        console.log("three");
        SetClass("translate-x-36 w-60 h-60");
        setPos(value);
        break;
      case 4:
        console.log("four");
        SetClass("translate-x-36 w-60 h-auto");
        setPos(4);
        setTimeout(() => {
          SetClass("");
          setPos(0);
        }, 400);

        break;
      default:
        console.log("default");
        SetClass("");

    }
  };
  return (
    <div className=" relative flex justify-center items-center px-4 gap-6 flex-col w-full">
      <div className="flex justify-start items-start w-8/12 h-72">
        <div className={`ease-in-out  duration-500  transition-all  `}>
          <div
            className={` ${
              Color === "minus" ? "bg-gray-100" : "bg-gray-800"
            } ${Class} duration-500  ease-in-out transition-all shadow-lg rounded-lg p-1.5`}
          >
            <div
              className={`flex ${Pos === 1 && "translate-x-48 duration-500"} ${
                Pos === 4 && "translate-x-48 duration-300"
              }  ${Pos === 1 && "translate-x-48 duration-500"} ${
                Pos === 2 && "translate-y-40 translate-x-28 duration-700"
              } ${
                Pos === 3 && "translate-y-48 translate-x-0 duration-500"
              } ease-in-out  transition-all`}
            >
              <Clock Position={HandlePosition} Color={Color} />
            </div>
          </div>
        </div>
      </div>
      <div className="border-4 rounded-xl py-6 px-4  w-8/12">
        <h1 className="font-bold mb-2">Control :</h1>
        <label htmlFor="mySelect" className="mr-4">
          Theme:
        </label>
        <select
          className="border-2 focus:outline-none"
          id="mySelect"
          value={Color}
          onChange={handleColor}
        >
          <option value="">Choose Option</option>
          <option value="plus">plus</option>
          <option value="minus">minus</option>
        </select>
      </div>
    </div>
  );
};

export default ClockConstainer;
