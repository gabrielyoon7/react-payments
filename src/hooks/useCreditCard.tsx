import { useEffect, useState } from 'react';
import * as T from 'types';

interface UseCreditCard {
  creditCardList: T.CreditCard[];
  saveCreditCard: (creditCard: T.CreditCard) => void;
}
export const useCreditCard = (): UseCreditCard => {
  const [creditCardList, setCreditCardList] = useState<T.CreditCard[]>([]);

  const existCreditCards = (() =>
    JSON.parse(localStorage.getItem('creditCards') || '[]'))();

  const saveCreditCard = (creditCard: T.CreditCard): void => {
    localStorage.setItem(
      'creditCards',
      JSON.stringify([...existCreditCards, creditCard])
    );
  };

  useEffect(() => {
    setCreditCardList(existCreditCards);
  }, []);

  return { creditCardList, saveCreditCard };
};
