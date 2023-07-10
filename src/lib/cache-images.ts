import { AllCardType, CardType, CurrentCardType, MaxCardsType } from "@/types";
import { getRandomCards } from "./get-random-card";

export function cacheImages(
  cards: AllCardType,
  maxCards: number
): Promise<CurrentCardType> {
  const newCards: AllCardType = getRandomCards(cards, maxCards);

  const promises: Promise<CardType>[] = newCards.map(
    (card) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.src = card.image.src;
        img.onload = () => resolve(card);
        img.onerror = () =>
          reject(new Error(`Failed to load ${card.name} image`));
      })
  );

  return Promise.all(promises) as Promise<CurrentCardType>;
}
