import { AllCardType, CurrentCardType } from "@/types";

export function getRandomCards(
  array: AllCardType,
  maxCards: number,
  extraCheck = false
): AllCardType | CurrentCardType {
  const newArray = extraCheck ? array : JSON.parse(JSON.stringify(array))
  const cards: AllCardType = [];

  while (cards.length < maxCards) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomCard = newArray[randomIndex];

    const isAllClicked = extraCheck ? cards.length === maxCards - 1 ? [...cards, randomCard].every(({ isClicked }) => isClicked): false
    :false

    if(!cards.includes(randomCard) && !isAllClicked) cards.push(randomCard)
  }

  return cards
}
