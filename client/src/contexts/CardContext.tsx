import { type ReactNode, createContext, useContext, useState } from "react";
import type { Product } from "../types/product";

type CardContextType = {
  cards: Product[];
  addShoppingCards: (product: Product) => void;
};

type ChildrenType = {
  children: ReactNode;
};

const CardContext = createContext<CardContextType | null>(null);

export function CardProvider({ children }: ChildrenType) {
  const [cards, setCards] = useState<Product[]>([]);

  const addShoppingCards = (product: Product) => {
    setCards([...cards, product]);
  };

  return (
    <CardContext.Provider value={{ cards, addShoppingCards }}>
      {children}
    </CardContext.Provider>
  );
}

export const useCard = () => {
  const card = useContext(CardContext);

  if (card === null) {
    throw new Error("useCard has to be used within CardProvider");
  }
  return card;
};
