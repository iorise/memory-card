import React from "react";

interface ButtonProps {
  label?: string;
  children?: React.ReactNode;
  className?: string;
  onClick: () => void;
}

const ButtonImage = ({ label, children, className, onClick }: ButtonProps) => {
  return (
    <button
      className={`${className} flex w-full max-w-[200px] rounded-2xl  bg-gradient-to-t from-pink-500 to-blue-500 hover:bg-white py-1 px-1 text-lg font-bold transition-all duration-300 hover:scale-105 hover:text-white hover:duration-300 hover:border-white focus:ring-offset-bg-color focus-visible:scale-105 focus-visible:text-white
       focus-visible:outline-none focus-visible:ring  focus-visible:ring-white focus-visible:ring-offset-2 active:scale-95 active:duration-100`}
      type="button"
      onClick={onClick}
    >
      {label || children}
    </button>
  );
};

export default ButtonImage;
