import React from "react";

interface HeaderProps {
  currentScore: number | null;
}

const Header = ({ currentScore }: HeaderProps) => {
  return (
    <div
      className={`transition-all duration-500 animate-fade-in text-center relative ${
        currentScore || currentScore === 0
          ? "text-3xl"
          : "text-5xl md:-top-28 -top-24"
      }`}
    >
      <h1 className="font-bold bg-gradient-to-r to-pink-300 from-blue-300 bg-clip-text text-transparent">
        MEMORY CARD GAME
      </h1>
    </div>
  );
};

export default Header;
