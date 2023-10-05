import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { BiArrowBack } from "react-icons/bi";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(-1)}>
      <BiArrowBack />
    </Button>
  );
};

const Button = styled.button`
  position: absolute;
  left: 20px;
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  font-size: 28px;
  font-weight: 700;
`;
