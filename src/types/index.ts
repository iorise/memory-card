export type CardType = {
  name: string;
  image: string;
  isClicked: boolean;
};

export type AllCardType = CardType[];

export type CurrentCardType =
  | [CardType, CardType, CardType]
  | [CardType, CardType, CardType, CardType]
  | [CardType, CardType, CardType, CardType, CardType];

export type DifficultyModesType = "easy" | "medium" | "hard"
export type MaxScoreType = 10 | 20 | 30
export type MaxCardsType = 3 | 4 | 5

