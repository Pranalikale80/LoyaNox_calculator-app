import { useState } from "react";

const buttons = [
  "AC", "%", "EXP", "⌫",
  "(", ")", "x²", "÷",
  "7", "8", "9", "×",
  "4", "5", "6", "-",
  "1", "2", "3", "+",
  "0", ".", "="
];

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "AC") {
      setInput("");
    } 
    else if (value === "⌫") {
      setInput(input.slice(0, -1));
    } 
    else if (value === "=") {
      try {
        const result = eval(input.replace(/×/g, "*").replace(/÷/g, "/"));
        setInput(result.toString());
      } catch {
        setInput("Error");
      }
    } 
    else {
      setInput(input + value);
    }
  };

  return (
    <div className="w-[320px] bg-black/30 backdrop-blur-xl rounded-3xl p-4 shadow-2xl">
      
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        <p className="text-white ml-3 text-sm">CALCULATOR</p>
      </div>

      {/* Display */}
      <div className="bg-white/10 
        backdrop-blur-xl 
        border border-white/20 text-right text-white text-3xl p-4 rounded-xl mb-4 min-h-[70px]">
        {input || "0"}
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-4 gap-3">
        {buttons.map((btn, i) => (
          <button
            key={i}
            onClick={() => handleClick(btn)}
            className={`
              p-3 rounded-xl text-lg font-semibold 
              backdrop-blur-md 
              border border-white/10 
              hover:scale-105 
              transition duration-200
              ${btn === "=" ? "col-span-2 bg-green-500" :
                ["+", "-", "×", "÷"].includes(btn) ? "bg-orange-400" :
                btn === "AC" ? "bg-blue-500" :
                btn === "⌫" ? "bg-red-500" :
                "bg-gray-200"}
            `}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;