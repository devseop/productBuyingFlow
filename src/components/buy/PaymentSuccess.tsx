import { useState, useEffect } from "react";
import { Spinner } from "../Spinner";

export const PaymentSuccess = () => {
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

  return (
    <>
      {isLoading ? (
        <div>
          <p>결제 정보를 확인 중입니다...</p>
          <Spinner />
        </div>
      ) : (
        <h1>결제가 완료되었습니다.</h1>
      )}
    </>
  );
};
