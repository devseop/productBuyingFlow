import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const Spinner = () => {
  return (
    <Container>
      <Circular />
    </Container>
  );
};

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 35vh;
`;

const Circular = styled.div`
  border: 8px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  border-top: 8px solid rgba(40, 121, 255, 0.8);
  width: 80px;
  height: 80px;
  animation: ${spin} 1s ease-in-out infinite;
`;
