import React, { ReactNode } from "react";
import styled from "@emotion/styled";

type AppLayoutProps = {
  children: ReactNode;
};

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Main>{children}</Main>
    </>
  );
};

const Main = styled.main`
  margin: 20px 20px 48px;
`;
