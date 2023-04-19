import styled from 'styled-components';

export const CreditCardLayout = styled.div`
    width: 213px;
    height: 133px;
    background-color: #333333;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 14px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    letter-spacing: 6px;
`;

export const CreditCardICChip = styled.div`
    width: 40px;
    height: 26px;
    background: #CBBA64;
    border-radius: 4px;
    margin-top: 47px;
    margin-bottom: 15px;
`;

export const CreditCardConatiner = styled.div`
    margin-top: 13px;
    display: flex;
    justify-content: space-between;
`;

export const CreditCardNumber = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CreditCardBox = styled.div`
    display: flex;
    align-items: center;
    letter-spacing: 2px;
`;
