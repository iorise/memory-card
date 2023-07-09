import { CurrentCardType } from "@/types";
import React from "react";
import CardImage from "../card-image";
import Loader from "../ui/loader";
import { Button } from "../ui/button";

interface GameSectionProps {
  maxScoreNumber: number;
  currentScore: number;
  currentCards: CurrentCardType | null;
  resetGame: () => void;
  handleCardClick: (name: string) => () => void;
}

const GameSection = ({
  maxScoreNumber,
  currentScore,
  currentCards,
  resetGame,
  handleCardClick,
}: GameSectionProps) => {
  if (currentCards === null) {
    return;
  }
  return (
    <div className="w-full flex flex-col gap-10 justify-center text-center">
      <p className="text-4xl font-bold text-pink-300">
        {currentScore} / {maxScoreNumber}
      </p>
      <div className="grid justify-center gap-6 md:[grid-template-columns:repeat(auto-fit,200px)] [grid-template-columns:repeat(auto-fit,100px)]">
        {currentCards.map((item, index) => (
          <div key={index}>
            <CardImage
              name={item.name}
              image={item.image}
              key={index}
              handleCardClick={handleCardClick(item.name)}
            />
          </div>
        ))}
      </div>
      <div>
        <Button size={"xl"} variant={"ghost"} onClick={resetGame}>
          Menu
        </Button>
      </div>
    </div>
  );
};

export default GameSection;
