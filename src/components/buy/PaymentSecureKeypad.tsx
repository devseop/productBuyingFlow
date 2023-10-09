import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { FaDeleteLeft } from "react-icons/fa6";

import { Spinner } from "../Spinner";
import { AppLayout } from "../AppLayout";

import { shuffleArray } from "../../utils/shuffleArray";

const CHECK_PAYMENT_PASSWORD = "123456";
const BASIC_ARRAY = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const PaymentSecureKeypad = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [numbers, setNumbers] = useState<number[]>([]);
  const [paymentPassword, setPaymentPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });

  useEffect(() => {
    setNumbers(shuffleArray(BASIC_ARRAY));
  }, []);

  const secureKeypadClickHandler = (num: number) => {
    if (paymentPassword.length < 6) {
      setPaymentPassword((prev) => prev + num.toString());
    }
  };

  const secureKeypadClearHandler = () => {
    setPaymentPassword("");
  };

  const secureKeypadDeleteHandler = () => {
    setPaymentPassword((prev) => prev.slice(0, -1));
  };

  useEffect(() => {
    if (paymentPassword.length === 6) {
      if (paymentPassword === CHECK_PAYMENT_PASSWORD) {
        navigate("/paymentSuccess");
        setPaymentPassword("");
        setErrorMsg("");
      } else {
        setPaymentPassword("");
        setErrorMsg("결제 비밀번호가 맞지 않습니다. 다시 입력해주세요.");
      }
    }
  }, [navigate, paymentPassword]);

  if (isLoading) return <Spinner />;

  return (
    <AppLayout>
      <Container>
        <Title>결제 비밀번호 입력</Title>
        <KeypadDisplayContainer>
          {Array(6)
            .fill(0)
            .map((_, idx) => (
              <KeypadDisplayElement
                key={idx}
                isActived={idx < paymentPassword.length}
              />
            ))}
        </KeypadDisplayContainer>
        {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
        <ButtonsContainer>
          {numbers.map((num) => (
            <SecureKeypadButton
              key={num}
              onClick={() => secureKeypadClickHandler(num)}
            >
              {num}
            </SecureKeypadButton>
          ))}
          <SecureKeypadButton
            className="clear"
            onClick={secureKeypadClearHandler}
          >
            전체삭제
          </SecureKeypadButton>
          <SecureKeypadButton
            className="delete"
            onClick={secureKeypadDeleteHandler}
          >
            <FaDeleteLeft />
          </SecureKeypadButton>
        </ButtonsContainer>
      </Container>
    </AppLayout>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.span`
  color: #222;
  font-size: 28px;
  font-weight: 700;
  margin: 48px 0;
`;

const KeypadDisplayContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const KeypadDisplayElement = styled.div<{ isActived: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isActived ? "rgba(40, 121, 255, 1)" : "rgba(80, 80, 80, 0.2)"};
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  font-weight: 600;
  padding-top: 16px;
`;

const ButtonsContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas: ". . ." ". . ." ". . ." "clear . delete";
  background-color: rgba(40, 121, 255, 1);
`;

const SecureKeypadButton = styled.button`
  color: white;
  width: 30vmin;
  height: 18vmin;
  font-size: 18px;
  font-weight: 700;
  border: none;
  background-color: transparent;

  &.clear {
    grid-area: clear;
    font-weight: 500;
  }

  &.delete {
    grid-area: delete;
    font-size: 24px;
  }
`;
