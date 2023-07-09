import React from "react";

interface HeaderProps {
  currentScore: number | null;
}

const Header = ({ currentScore }: HeaderProps) => {
  return (
    <header>
      <h1 className="text-4xl font-bold stroke-pink-300 stroke-3 outline-4 outline p-2 rounded-tl-lg rounded-br-lg">
        MEMORY CARD GAME
      </h1>
    </header>
  );
};

export default Header;
