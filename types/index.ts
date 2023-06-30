import { MouseEventHandler } from "react";

export interface customButtonProbs {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  text: string;
  textStyles?: string;
  rightIcon: string;
  isDisabled?: boolean;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface carProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface filterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
export interface OptionsProps {
  value: string;
  title: string;
}
export interface customFilterProps {
  title: string;
  options: OptionsProps[];
}
