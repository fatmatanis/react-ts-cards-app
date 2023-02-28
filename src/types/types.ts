export interface ICelebrety {
  age: number;
  name: string;
  birthday: string;
  deathday: string;
  gender: string;
  height: number;
  nationality: string;
  occupation: string[];
}

export interface ICardItemProps {
  cards: ICelebrety[];
}

export interface ISearchBarProps {
  onSearch: () => void;
}
