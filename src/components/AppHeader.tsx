import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../rtk/store";
import styled from "@emotion/styled";

import { BackButton } from "./BackButton";
import { BiUser } from "react-icons/bi";

type AppHeaderProps = {
  pageTitle: string;
};

export const AppHeader: React.FC<AppHeaderProps> = ({ pageTitle }) => {
  const token = useSelector((state: RootState) => state.user.token);

  return (
    <Header>
      <div>{pageTitle === "Products" ? null : <BackButton />}</div>
      <h1>{pageTitle}</h1>
      {token && (
        <ProfileLink to="/profile">
          <BiUser />
        </ProfileLink>
      )}
      {!token && pageTitle !== "Sign In" && (
        <SignInLink to="/signin">Sign In</SignInLink>
      )}
    </Header>
  );
};

const Header = styled.header`
  position: fixed;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid lightgray;
  padding: 16px 20px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;

  h1 {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    align-items: center;
  }

  div {
    width: 24px;
    height: 24px;
  }
`;

const SignInLink = styled(Link)`
  color: rgba(40, 121, 255, 1);
  font-size: 17px;
  font-weight: 700;
  text-decoration: none;
  text-align: right;
`;

const ProfileLink = styled(Link)`
  color: #222;
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
  text-align: right;

  height: 24px;
`;
