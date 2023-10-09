import { useEffect, useState } from "react";
import styled from "@emotion/styled";

import { Spinner } from "../Spinner";

export const PaymentSecureKeypad = () => {
  // PG사 API 요청 구간을 표현하기 위한 Spinner 구현
  // 2초간 Spinner를 보여준 뒤에 보안 키패드를 렌더링
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  });

  if (isLoading) return <Spinner />;

  return (
    <Container>
      <span>결제 비밀번호 입력</span>
      <div>입력된 비밀번호 표시</div>
      <div>키패드부분</div>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
