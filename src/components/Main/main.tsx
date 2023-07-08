"use client"

import { AllCardType, CurrentCardType, DifficultyModesType, MaxCardsType, MaxScoreType } from "@/types";
import { useState, useEffect, useRef } from "react";

const Main = () => {
  const [allCards, setAllCards] = useState<AllCardType | null>(null)
  const [currentCards, setCurrentCards] = useState<CurrentCardType | null>(null)
  const [currentScore, setCurrentScore] = useState<number | null>(null)
  const [maxScore, setMaxScore] = useState<MaxScoreType | null>(null)
  const [maxCards, setMaxCards] = useState<MaxCardsType | null>(null)
  const [loading, setLoading] = useState(false)
  const [win, setWin] = useState(false)
  const [gameOver, setGameOver] = useState(false)

  const handleDifficultyMode = (mode: DifficultyModesType) => () => {
    const [maxCardsNumber, maxScoreNumber]: [MaxCardsType, MaxScoreType] = mode === "easy" ? [3, 10] : mode === "medium" ? [4, 20] : [5, 30];
  
    setCurrentScore(1)
    setMaxCards(maxCardsNumber)
    setMaxScore(maxScoreNumber)
  }

  const handleCardClick = (name: string) => () => {
    const cardIndex = allCards!.findIndex((card) => card.name === name)
    const { isClicked } = allCards![cardIndex]
    if (isClicked) {
      setGameOver(true)
      return
    }

    setCurrentScore((prevCurrentScore) => prevCurrentScore! + 1)
    setAllCards((prevAllCards) => {
      const newCards = [...prevAllCards!]
      newCards[cardIndex].isClicked = true
      return newCards
    })

    if (currentScore === maxScore) {
      setGameOver(true)
      setWin(true)
    }
  }

  
  return <div>Main</div>;
};

export default Main;
