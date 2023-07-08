import { AllCardType, CurrentCardType, MaxCardsType } from "@/types";

export function getRandomCards(
  array: AllCardType,
  maxCards: MaxCardsType
): AllCardType | CurrentCardType {
  const newArray: AllCardType = JSON.parse(JSON.stringify(array));
  const cards: AllCardType = [];

  while (cards.length < maxCards) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomCard = newArray[randomIndex];

    if(!cards.includes(randomCard)) cards.push(randomCard)
  }

  return cards
}
