import React from "react";

function ProgressBar({ value }) {
  return (
    <div className="w-full bg-gray-700  h-1.5 border rounded-2xl overflow-hidden">
      <div
        className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 transition-all duration-300"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;



// // tihi is use of progress bar 
// import React, { useState } from "react";
// import ProgressBar from "./ProgressBar";

// function App() {
//   const [progress, setProgress] = useState(40); // Example: 40%

//   return (
//     <div className="p-6 space-y-4">
//       <h2 className="text-xl font-semibold text-white">Progress Example</h2>
//       <ProgressBar value={progress} />

//       <button
//         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
//         onClick={() => setProgress((prev) => (prev >= 100 ? 0 : prev + 10))}
//       >
//         Increase Progress
//       </button>
//     </div>
//   );
// }

// export default App;

