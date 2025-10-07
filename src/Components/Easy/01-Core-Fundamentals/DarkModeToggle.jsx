import React, { useEffect, useState } from "react";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen w-full flex flex-col justify-center items-center text-center transition-all duration-400 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <h1 className="text-4xl font-bold mb-8">Dark Mode Toggle</h1>
      <div className="flex justify-center items-center gap-5">
        {/* Tailwind Toggle Switch */}
        <label className="relative inline-block w-[60px] h-[34px] select-none">
          <input
            type="checkbox"
            className="opacity-0 w-0 h-0 peer"
            onChange={() => setDarkMode(!darkMode)}
            checked={darkMode}
          />
          <span className="absolute top-0 left-0 right-0 bottom-0 rounded-full transition-colors duration-400 peer-checked:bg-green-500 bg-gray-300"></span>
          <span
            className={`absolute left-1 bottom-1 h-[26px] w-[26px] rounded-full bg-white transition-transform duration-400 ${
              darkMode ? "translate-x-[26px]" : ""
            }`}
          ></span>
        </label>
        <span className="text-lg font-bold">
          {darkMode ? "Dark Mode" : "Light Mode"}
        </span>
      </div>
    </div>
  );
}

export default DarkModeToggle;