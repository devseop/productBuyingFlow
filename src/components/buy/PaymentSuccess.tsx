import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { BsFillBagCheckFill } from "react-icons/bs";

import { Spinner } from "../Spinner";
import { useNavigate } from "react-router-dom";

export const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  });

  // if (isLoading) return <Spinner />;

  const goToMain = () => {
    navigate("/products");
  };

  return (
    <>
      {isLoading ? (
        <div>
          <Spinner />
          <LoadingTitle>결제 정보를 확인 중입니다...</LoadingTitle>
        </div>
      ) : (
        <SuccessContainer>
          <IconContainer>
            <BsFillBagCheckFill />
          </IconContainer>
          <SuccessTitle>결제가 완료되었습니다.</SuccessTitle>
          <button onClick={goToMain}>홈으로</button>
        </SuccessContainer>
      )}
    </>
  );
};

const LoadingTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  margin-top: 32px;
`;

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  margin-top: 35vh;

  button {
    color: rgba(40, 121, 255, 1);
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    padding: 12px 16px;

    border: 1.5px solid rgba(40, 121, 255, 1);
    border-radius: 8px;
    background-color: transparent;
    cursor: pointer;
  }
`;

const IconContainer = styled.div`
  color: rgba(40, 121, 255, 1);
  font-size: 48px;
`;

const SuccessTitle = styled.p`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;
