import styled from "styled-components";

export const Container = styled.div`
  max-width: 520px;
  padding: 50px 60px 20px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 560px) {
    padding: 20px;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 40px;
  color: #ffffff;
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  opacity: 0.7;
`;

export const Button = styled.button`
  width: 194px;
  height: 56px;
  margin-top: 16px;
  background: #fa4776;
  border-radius: 40px;

  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
  transition: 0.3s;

  &:hover {
    opacity: o.7;
    cursor: pointer;
  }

  &:active {
    opacity: 0.5;
  }
`;
