import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { BiArrowBack } from "react-icons/bi";

type AppLayoutProps = {
  children: ReactNode;
  pageTitle: string;
};

export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  pageTitle,
}) => {
  const navigate = useNavigate();

  return (
    <AppContainer>
      <Header>
        {pageTitle === "Detail" ? (
          <button onClick={() => navigate(-1)}>
            <BiArrowBack />
          </button>
        ) : null}
        {pageTitle && <h1>{pageTitle}</h1>}
      </Header>
      <Main>{children}</Main>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  margin: 20px 0 4px;

  h1 {
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    align-items: center;
    height: 40px;
    /* padding-top: 3px; */
  }

  button {
    position: absolute;
    left: 20px;
    width: 40px;
    height: 40px;
    border: none;
    background-color: transparent;
    font-size: 28px;
    font-weight: 700;
  }
`;

const Main = styled.main`
  margin: 20px 20px 48px;
`;
