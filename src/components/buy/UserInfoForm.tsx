import styled from "@emotion/styled";
import { AppLayout } from "../AppLayout";
import { useInput } from "../../hooks/useInput";
import { DetailInfoProps } from "../../types/types";

export const UserInfoForm = () => {
  const [checkInfo, inputChangeHandler] = useInput<DetailInfoProps>({
    realname: "",
    phone: "",
    address: "",
  });

  const checkInfoSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(checkInfo);
  };

  return (
    <AppLayout pageTitle="Check Info">
      <form onSubmit={checkInfoSubmitHandler}>
        <InputContainer>
          <label>Name</label>
          <input
            type="text"
            name="realname"
            placeholder="input your name"
            value={checkInfo.realname}
            onChange={inputChangeHandler}
          />
        </InputContainer>
        <InputContainer>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="input your phone number"
            value={checkInfo.phone}
            onChange={inputChangeHandler}
          />
        </InputContainer>
        <InputContainer>
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="input your address"
            value={checkInfo.address}
            onChange={inputChangeHandler}
          />
        </InputContainer>
      </form>
    </AppLayout>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-weight: 600;
    color: rgba(80, 80, 80, 1);
  }

  input {
    font-size: 16px;
    margin-bottom: 16px;
    border-radius: 8px;
    border: 1px solid rgba(80, 80, 80, 0.2);
    outline: none;
    padding: 12px;
    font-weight: 600;

    &:focus {
      border: 1px solid rgba(40, 121, 255, 0.8);
    }
  }
`;
