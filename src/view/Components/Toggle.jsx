import React, { useState } from "react";

function ToggleSwitch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div 
      onClick={() => setEnabled(!enabled)} 
      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
        enabled ? "bg-green-500" : "bg-gray-400"
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
          enabled ? "translate-x-6" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
}

export default ToggleSwitch;
