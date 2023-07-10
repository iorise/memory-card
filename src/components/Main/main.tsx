"use client";

import { animeCharacter } from "@/assets/characters";
import { cacheImages } from "@/lib/cache-images";
import { getRandomCards } from "@/lib/get-random-card";
import {
  AllCardType,
  CurrentCardType,
  DifficultyModesType,
  MaxCardsType,
  MaxScoreType,
} from "@/types";
import { useState, useEffect } from "react";
import ControlSection from "./control-section";
import GameSection from "./game-section";
import Header from "./header";
import Complete from "./complete";
import GameWrapper from "./game-wrapper";
import Loader from "../ui/loader";

const Main = () => {
  const [allCards, setAllCards] = useState<AllCardType | null>(null);
  const [currentCards, setCurrentCards] = useState<CurrentCardType | null>(
    null
  );
  const [currentScore, setCurrentScore] = useState<number | null>(null);
  const [maxScore, setMaxScore] = useState<MaxScoreType | null>(null);
  const [maxCards, setMaxCards] = useState<MaxCardsType | null>(null);
  const [loading, setLoading] = useState(false);
  const [win, setWin] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  useEffect(() => {
    if (!maxScore) return;

    const fetchCards = async () => {
      let cards: AllCardType;
      setLoading(true);

      try {
        cards = await cacheImages(animeCharacter, maxScore!);
      } catch (error) {
        console.log(error);
        setLoading(false);
        return;
      }

      await sleep(1500);
      setAllCards(cards);
    };

    fetchCards();
  }, [maxScore]);

  useEffect(() => {
    if (gameOver || !allCards) return;

    const cards = getRandomCards(allCards, maxCards!, true) as CurrentCardType;

    setCurrentCards(cards);
    setLoading(false);
  }, [allCards]);

  const handleDifficultyMode = (mode: DifficultyModesType) => () => {
    const [maxCardsNumber, maxScoreNumber]: [MaxCardsType, MaxScoreType] =
      mode === "easy" ? [3, 10] : mode === "medium" ? [4, 20] : [5, 30];

    setCurrentScore(0);
    setMaxCards(maxCardsNumber);
    setMaxScore(maxScoreNumber);
  };

  const handleCardClick = (name: string) => () => {
    const cardIndex = allCards!.findIndex((card) => card.name === name);
    const { isClicked } = allCards![cardIndex];
    if (isClicked) {
      setGameOver(true);
      return;
    }

    setCurrentScore((prevCurrentScore) => prevCurrentScore! + 1);
    setAllCards((prevAllCards) => {
      const newCards = [...prevAllCards!];
      newCards[cardIndex].isClicked = true;
      return newCards;
    });

    if (currentScore === maxScore! - 1) {
      setGameOver(true);
      setWin(true);
    }
  };

  const resetGame = () => {
    setAllCards(null);
    setCurrentCards(null);
    setCurrentScore(null);
    setMaxScore(null);
    setMaxCards(null);
    setLoading(false);
    setGameOver(false);
    setWin(false);
  };
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-8">
      <Header currentScore={currentScore} currentCards={currentCards} />
      <GameWrapper>
        {win ? (
            <Complete won resetGame={resetGame} />
        ) : gameOver && !win ? (
            <Complete lost resetGame={resetGame} />
        ) : currentCards ? (
          <GameSection
            maxScoreNumber={maxScore!}
            currentScore={currentScore!}
            currentCards={currentCards}
            resetGame={resetGame}
            handleCardClick={handleCardClick}
          />
        ) : loading ? (
          <Loader />
        ) : (
          <ControlSection handleDifficultyMode={handleDifficultyMode} />
        )}
      </GameWrapper>
    </div>
  );
};

export default Main;
