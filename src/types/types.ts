export interface ICard {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface ICardItemProps {
  cards: ICard[];
}
