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

  return <div>Main</div>;
};

export default Main;
