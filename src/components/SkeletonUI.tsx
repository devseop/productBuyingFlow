import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const SkeletonUI = () => {
  return (
    <Item>
      <div>
        <Img />
      </div>
      <Container>
        <Badge />
        <InfoContainer>
          <Title />
          <SubInfoContainer>
            <SubInfo />
            <SubInfo />
          </SubInfoContainer>
        </InfoContainer>
        <DescContainer>
          <DescHeader />
          <Desc />
          <Desc />
          <Desc />
        </DescContainer>
      </Container>
    </Item>
  );
};

const LoadingAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50%,
  100% {
    transform: translateX(460px);
  }
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  margin: 0 0 16px 0;
  position: relative;
`;

const Img = styled.div`
  width: calc(100vmin - 40px);
  height: calc(100vmin - 40px);
  border-radius: 8px;
  background: #f2f2f2;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${LoadingAnimation} 2s infinite linear;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: flex-start;
`;

const Badge = styled.p`
  margin: 0;
  width: 30%;
  height: 10px;
  border-radius: 2px;
  background: #f2f2f2;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${LoadingAnimation} 2s infinite linear;
  }
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.p`
  margin: 0;
  width: 100%;
  height: 18px;
  border-radius: 2px;
  background: #f2f2f2;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${LoadingAnimation} 2s infinite linear;
  }
`;

const SubInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const SubInfo = styled.p`
  margin: 0;
  width: 30%;
  height: 18px;
  border-radius: 2px;
  background: #f2f2f2;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${LoadingAnimation} 2s infinite linear;
  }
`;

const DescContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  flex-direction: column;
  align-items: flex-start;
`;

const DescHeader = styled.p`
  width: 50%;
  height: 12px;
  margin: 0;
  border-radius: 2px;
  background: #f2f2f2;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${LoadingAnimation} 2s infinite linear;
  }
`;

const Desc = styled.p`
  width: 100%;
  height: 16px;
  margin: 0;
  border-radius: 2px;
  background: #f2f2f2;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${LoadingAnimation} 2s infinite linear;
  }
`;
