import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const transformedText = inputValue.replace(/ /g, "🤸🏼");
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCopyText = () => {
    const textArea = document.createElement("textarea");
    textArea.value = transformedText;

    document.body.appendChild(textArea);

    textArea.select();
    document.execCommand("copy");

    document.body.removeChild(textArea);

    toast.success("Text copied!", { position: toast.POSITION.TOP_CENTER });
  };

  return (
    <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 h-screen w-screen m-auto">
      <div className="bg-gradient-to-br  relative top-3 from-yellow-200 via-yellow-400 to-yellow-700 w-[350px] rounded-2xl m-auto h-[600px]">
        <h1 className="text-center relative top-8 font-bold text-[3rem] text-[#FF9130]">
          🤸🏼Beshify🤸🏼
        </h1>

        <input
          type="text"
          placeholder="Enter text"
          className="text-center text-xl w-[250px] rounded-2xl flex justify-center m-auto mt-[100px] h-[40px] outline-none"
          value={inputValue}
          onChange={handleInputChange}
        />

        <h1 className="max-w-[250px] h-[200px] overflow-x-auto m-auto mt-7 bg-white text-[20px] rounded-3xl text-center p-2">
          {transformedText}
        </h1>

        <button
          className="bg-[#FF9130] w-[100px] h-[30px] rounded-xl text-white font-bold m-auto p-[3px] mt-[70px] flex justify-center shadow-xl hover:shadow-lg focus:outline-none focus:ring focus:border-blue-300"
          onClick={handleCopyText}
        >
          Copy text
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
