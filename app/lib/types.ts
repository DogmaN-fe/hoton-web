export interface IHouseCard {
  photo: string;
  title: string;
  description: IDescriptionForHouseCard;
  roomType: string
}

export interface IDescriptionForHouseCard {
  first: string;
  second?: string;
  third?: string;
}

export interface IAdvantageCard {
  icon: string;
  description: string;
}

export interface IToDoCard {
  image: string;
  description: string;
}
