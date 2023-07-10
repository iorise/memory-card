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
import ErrorSection from "./error-section";
import Footer from "./footer";

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
  const [error, setError] = useState(false)

  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const fetchCards = async () => {
    setLoading(true);

    try {
      const cards: AllCardType = await cacheImages(animeCharacter, maxScore!);
      setAllCards(cards);
    } catch (error) {
      console.log(error);
      setError(true)
    }

    await sleep(1000)

    setLoading(false);
  };

  useEffect(() => {
    if (!maxScore) return;

    fetchCards();
  }, [maxScore]);

  useEffect(() => {
    if (gameOver || !allCards) return;

    const cards = getRandomCards(allCards, maxCards!, true) as CurrentCardType;

    setCurrentCards(cards);
  }, [allCards, maxCards]);



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
      <Header currentScore={currentScore} />
      <GameWrapper>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorSection />
      ) : win ? (
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
      ) : (
        <ControlSection handleDifficultyMode={handleDifficultyMode} />
      )}
      </GameWrapper>
    </div>
  );
};

export default Main;
