import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import { AppLayout } from "../AppLayout";
import { SkeletonUI } from "../SkeletonUI";
import { getData } from "../../api/api";
import { ProductProps } from "../../types/types";

export const ProductDetail = () => {
  const [product, setProduct] = useState<ProductProps>();

  // url에서 id를 찾아 해당 데이터를 불러오기 위한 변수 선언
  const location = useLocation();
  const substringToRemove = "/products/";
  const productId = location.pathname.replace(substringToRemove, "");

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const data = await getData(Number(productId));
        setProduct(data as ProductProps);
      } catch (e) {
        console.error(e);
      }
    };

    fetchProductData();
  }, [productId]);

  return (
    <AppLayout pageTitle="Detail">
      {!product ? (
        <SkeletonUI />
      ) : (
        <>
          <ImageContainer>
            <Image src={product.image} alt="제품 이미지" />
          </ImageContainer>
          <AboveTitleContainer>
            <CategoryBagde>{product.category}</CategoryBagde>
          </AboveTitleContainer>
          <Title>{product.title}</Title>
          <InfoContainer>
            <Price>${product.price}</Price>
            <Stock>{product.rating.count} in a stock</Stock>
          </InfoContainer>
          <DescContainer>
            <span>Description</span>
            <p>{product.description}</p>
          </DescContainer>
          <ButtonContainer>
            <Button isPrimary={false}>ADD TO CART</Button>
            <Button isPrimary={true}>BUY NOW</Button>
          </ButtonContainer>
        </>
      )}
    </AppLayout>
  );
};

const ImageContainer = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
  margin: 0 auto;
`;

const AboveTitleContainer = styled.div``;

const CategoryBagde = styled.span`
  color: rgba(80, 80, 80, 0.8);
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
`;

const Title = styled.h1`
  font-size: 18px;
  line-height: 1.4;
  margin: 4px 0 16px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const Price = styled.span`
  color: rgba(40, 121, 255, 1);
  font-size: 20px;
  font-weight: 700;
  text-align: left;
`;

const Stock = styled.span`
  color: rgba(80, 80, 80, 0.7);
  font-weight: 600;
  text-align: right;
`;

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  span {
    color: rgba(80, 80, 80, 0.5);
    font-size: 16px;
    font-weight: 500;
  }

  p {
    color: rgba(34, 34, 34, 0.8);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
  }
`;

const ButtonContainer = styled.div`
  position: fixed;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 16px;
  bottom: 0;
  width: calc(100vw - 40px);
  padding: 20px 0;
  background-color: white;
`;

const Button = styled.button<{ isPrimary: boolean }>`
  color: ${(props) => (props.isPrimary ? "white" : "rgba(40, 121, 255, 1)")};
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  height: 48px;

  border: ${(props) =>
    props.isPrimary ? "none" : "1px solid rgba(40, 121, 255, 1)"};
  border-radius: 8px;
  background-color: ${(props) =>
    props.isPrimary ? "rgba(40, 121, 255, 1)" : "transparent"};
`;
