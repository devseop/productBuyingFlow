import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { AppLayout } from "../AppLayout";
import { signInApi } from "../../api/api";

export const SignIn = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    username: "mor_2314",
    password: "83r5^_",
  });

  const userInfoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => {
      return { ...prev, [name]: value };
    });
    console.log("userInfo", userInfo);
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signInApi(userInfo);
      console.log("✅ SignIn success");
      navigate("/products");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AppLayout pageTitle="Sign In">
      <Form onSubmit={onSubmitHandler}>
        <Input
          type="text"
          name="username"
          placeholder="user name"
          value={userInfo.username}
          onChange={userInfoHandler}
          autoFocus
        />
        <Input
          type="password"
          name="password"
          placeholder="password"
          value={userInfo.password}
          onChange={userInfoHandler}
        />
        <Button type="submit">Sign In</Button>
      </Form>
    </AppLayout>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 16px;
  border-radius: 8px;
  border: 1px solid rgba(80, 80, 80, 0.2);
  height: 40px;
  outline: none;
  padding: 12px;
  font-weight: 600;

  &:focus {
    border: 1px solid rgba(40, 121, 255, 0.8);
  }
`;

const Button = styled.button`
  height: 44px;
  margin-top: 8px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background-color: rgba(40, 121, 255, 1);
  cursor: pointer;
`;
