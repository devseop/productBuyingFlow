import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";

import { AppLayout } from "../AppLayout";
import { ProductItem } from "../product/ProductItem";

import { useInput } from "../../hooks/useInput";
import { RootState } from "../../rtk/store";
import { checkInputVaild } from "../../utils/checkInputVaild";

import { DetailInfoProps } from "../../types/types";
import { saveDetailInfo } from "../../rtk/slice/userSlice";
import { AppHeader } from "../AppHeader";

export const CheckInfoForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.user.token);
  const selectedProduct = useSelector(
    (state: RootState) => state.product.selectedProduct,
  );
  const [checkInfo, inputChangeHandler] = useInput<DetailInfoProps>({
    realname: "",
    phone: "",
    address: "",
  });

  const checkInfoSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(saveDetailInfo(checkInfo));
    navigate("/payment");
  };

  // token이 없을 때 로그인 화면으로 리다이렉트
  useEffect(() => {
    if (!token) {
      navigate("/signIn");
    }
  });

  return (
    <>
      <AppHeader pageTitle="Check Info" />
      <AppLayout>
        <ProductContainer>
          <ProductTitle>Product</ProductTitle>
          <ProductWrapper>
            {selectedProduct && <ProductItem data={selectedProduct} />}
          </ProductWrapper>
        </ProductContainer>
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
          <ButtonContainer>
            <Button isValid={checkInputVaild(checkInfo)}>KEEP BUYING</Button>
          </ButtonContainer>
        </form>
      </AppLayout>
    </>
  );
};

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
`;

const ProductTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: rgba(80, 80, 80, 1);
  margin-bottom: 6px;
`;

const ProductWrapper = styled.ul`
  padding: 16px 12px 16px 8px;
  border: 1px solid rgba(80, 80, 80, 0.2);
  border-radius: 8px;
`;

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

const ButtonContainer = styled.div`
  position: fixed;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 16px;
  bottom: 0;
  width: calc(100vw - 40px);
  padding: 20px 0;
  background-color: white;
`;

const Button = styled.button<{ isValid: boolean }>`
  color: white;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  height: 48px;

  border: none;
  border-radius: 8px;
  background-color: ${(props) =>
    props.isValid ? "rgba(40, 121, 255, 1)" : "rgba(80, 80, 80, 0.2)"};
  cursor: ${(props) => (props.isValid ? "pointer" : "not-allowed")};
`;
