import React, { ReactNode } from "react";
import styled from "@emotion/styled";

type AppLayoutProps = {
  children: ReactNode;
};

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <AppContainer>
      <Main>{children}</Main>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// const LoginButton = styled.button`
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   width: 40px;
//   height: 40px;
//   border: none;
//   background-color: transparent;
//   font-size: 28px;
//   font-weight: 700;

//   a {
//     color: black;
//   }
// `;

const Main = styled.main`
  margin: 78px 20px 48px;
`;
