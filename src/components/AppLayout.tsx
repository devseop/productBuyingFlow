import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { BackButton } from "./BackButton";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

type AppLayoutProps = {
  children: ReactNode;
  pageTitle: string;
};

export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  pageTitle,
}) => {
  return (
    <AppContainer>
      <Header>
        {pageTitle === "Detail" ? <BackButton /> : null}
        {pageTitle && <h1>{pageTitle}</h1>}
        {pageTitle === "Sign In" ? null : pageTitle === "Check Info" ? null : (
          <LoginButton>
            <Link to="/signIn">
              <BiUser />
            </Link>
          </LoginButton>
        )}
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
  margin: 20px 0;

  h1 {
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    align-items: center;
    height: 40px;
    /* padding-top: 3px; */
  }
`;

const LoginButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  font-size: 28px;
  font-weight: 700;

  a {
    color: black;
  }
`;

const Main = styled.main`
  margin: 0 20px 48px;
`;
