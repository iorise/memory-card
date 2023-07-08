import { AllCardType, CardType, CurrentCardType, MaxCardsType } from "@/types";

export function cacheImages(
  cards: AllCardType,
  maxCards: MaxCardsType
): Promise<CurrentCardType> {
  const newCards: AllCardType = JSON.parse(JSON.stringify(cards));

  const promises: Promise<CardType>[] = newCards.map(
    (card) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.src = card.image;
        img.onload = () => resolve(card);
        img.onerror = () =>
          reject(new Error(`Failed to load ${card.name} image`));
      })
  );

  return Promise.all(promises) as Promise<CurrentCardType>;
}
