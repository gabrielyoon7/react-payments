import { ChangeEvent, useRef, useState } from 'react';
import { convertSecuredCreditCard } from 'domains/creditCard';
import styled from 'styled-components';
import useCreditCardForm from 'hooks/useCreditCardForm';
import * as S from '../style';
import { validateNumber } from '../../../domains/validations';

export const MaskedViewer = styled.p`
  background-color: #ecebf1;
  border-radius: 7px;
  height: 48px;
  width: 100%;
  border: none;
  font-size: 18px;
  :focus {
    outline: none;
  }
  margin-right: 10px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

function CreditCardNumberInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { creditCardForm, updateCreditCardNumber } = useCreditCardForm();
  const [markedCreditCardNumber, setMarkedCreditCardNumber] = useState('');

  const handleChangeCreditCardNumber = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newCreditCardNumber = event.target.value.replace(/\D/g, '');

    if (newCreditCardNumber.length > 16) return;

    const markedNumber = convertSecuredCreditCard(newCreditCardNumber)
      .filter((numbers) => !!numbers.length)
      .map((numbers) => numbers.join(''))
      .join(' - ');

    setMarkedCreditCardNumber(markedNumber);
    updateCreditCardNumber(newCreditCardNumber);
  };

  const isError = creditCardForm.number.length > 0 && !validateNumber(creditCardForm.number);

  return (
    <>
      <S.RelativeBox>
        <S.CreditCardRegisterLabel>카드 번호</S.CreditCardRegisterLabel>
        <MaskedViewer
          onClick={() => {
            if (inputRef.current) {
              inputRef.current.focus();
            }
          }}
        >
          {markedCreditCardNumber}
        </MaskedViewer>
        <S.HiddenInput
          ref={inputRef}
          type="string"
          value={creditCardForm.number}
          onChange={handleChangeCreditCardNumber}
        />
      </S.RelativeBox>
      {isError && (
        <S.ErrorMessage>
          카드번호는 16자리의 숫자로만 이루어져야 합니다.
        </S.ErrorMessage>
      )}
    </>
  );
}

export default CreditCardNumberInput;
