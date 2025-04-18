import React from "react";
import { Button } from "./ui/button";

const LadningPage = () => {
  const handleClick = () => {
    alert("Hello World");
  };

  return (
    <div className="flex justify-center items-center w-full h-[100vh] bg-black">
      <Button
        className="bg-black border border-white text-white hover:bg-white hover:text-black hover:scale-125 transition-all duration-100"
        onClick={handleClick}
      >
        React Course
      </Button>
    </div>
  );
};

export default LadningPage;
