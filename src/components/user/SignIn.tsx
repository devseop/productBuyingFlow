import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";

import { AppLayout } from "../AppLayout";

import { signInApi } from "../../api/api";
import { useInput } from "../../hooks/useInput";
import {
  saveUserInfo,
  signInFailure,
  signInStart,
  signInSuccess,
} from "../../rtk/slice/userSlice";

import { BasicInfoProps } from "../../types/types";

export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userInfo, inputChangeHandler] = useInput<BasicInfoProps>({
    username: "mor_2314",
    password: "83r5^_",
  });

  const signInSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatch(signInStart());
      const res = await signInApi(userInfo as BasicInfoProps);
      dispatch(signInSuccess(res));
      dispatch(saveUserInfo(userInfo));
      console.log("✅ SignIn OK");
      navigate(-1);
    } catch (err) {
      signInFailure(String(err));
    }
  };

  return (
    <AppLayout pageTitle="Sign In">
      <Form onSubmit={signInSubmitHandler}>
        <Input
          type="text"
          name="username"
          placeholder="user name"
          value={userInfo.username}
          onChange={inputChangeHandler}
          autoFocus
        />
        <Input
          type="password"
          name="password"
          placeholder="password"
          value={userInfo.password}
          onChange={inputChangeHandler}
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
