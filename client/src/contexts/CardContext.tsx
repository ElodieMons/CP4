import { type ReactNode, createContext, useContext, useState } from "react";
import type { Product } from "../types/product";

type CardContextType = {
  cards: Product[];
  addShoppingCards: (product: Product) => void;
  removeCard: (id: string) => void;
  totalPrice: number;
  nbCard: number;
};

type ChildrenType = {
  children: ReactNode;
};

const CardContext = createContext<CardContextType | null>(null);

//
// problème calcul total somme  => totalPrice (dans le context et appelé dans Card.tsx)
// Bug en remove, le produit supprimé affiche NaN => newTotalPrice
// problème dans ProductCard.tsx avec le bouton voir le produit/acheter
//

export function CardProvider({ children }: ChildrenType) {
  const [cards, setCards] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const addShoppingCards = (product: Product) => {
    setCards([...cards, product]);
    const newTotalPrice = totalPrice + product.price;
    setTotalPrice(newTotalPrice);
  };

  const removeCard = (id: string) => {
    setCards(cards.filter((product) => product.id !== id));
    const newTotalPrice =
      totalPrice - (cards.find((product) => product.id === id)?.price ?? 0);
    setTotalPrice(newTotalPrice);
  };

  return (
    <CardContext.Provider
      value={{
        cards,
        addShoppingCards,
        removeCard,
        totalPrice,
        nbCard: cards.length,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export const useCard = () => {
  const card = useContext(CardContext);

  if (!card) {
    throw new Error("useCard has to be used within CardProvider");
  }
  return card;
};
