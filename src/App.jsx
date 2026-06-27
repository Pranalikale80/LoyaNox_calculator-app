import { useState } from "react";
import Calculator from "./components/Calculator";
import { Calculator as CalcIcon } from "lucide-react";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center">

      {/* APP ICON (START SCREEN) */}
      {!open && (
        <div className="flex flex-col items-center gap-3">
          
            <button
            onClick={() => setOpen(true)}
                className=" w-16 h-16  rounded-2xl  flex items-center justify-center bg-white/30  backdrop-blur-xl  border border-white/30 shadow-xl hover:scale-110  transition duration-300 "
            >
             {/* Icon Design */}
             <div className="w-8 h-8 bg-gray-800 rounded-md grid grid-cols-3 gap-[2px] p-[3px]">

                {/* dots like calculator */}
                <span className="bg-orange-400 rounded-sm"></span>
                <span className="bg-gray-400 rounded-sm"></span>
                <span className="bg-gray-400 rounded-sm"></span>

                <span className="bg-gray-400 rounded-sm"></span>
                <span className="bg-gray-400 rounded-sm"></span>
                <span className="bg-orange-400 rounded-sm"></span>

                <span className="bg-gray-400 rounded-sm"></span>
                <span className="bg-gray-400 rounded-sm"></span>
                <span className="bg-gray-400 rounded-sm"></span>
              </div>
            </button>

          <p className="text-white text-sm">CALCULATOR</p>
        </div>
      )}

      {/* CALCULATOR APP */}
      {open && (
        <div className="animate-scaleIn">
          <Calculator />
        </div>
      )}
      
    </div>
  );
}

export default App;