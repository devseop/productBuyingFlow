import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import { AppLayout } from "../AppLayout";
import { LoadingPage } from "../../pages/LoadingPage";
import { BiSolidStar } from "react-icons/bi";
import { getProductData } from "../../api/api";
import { ProductProps } from "../../types/types";

export const ProductDetail = () => {
  const [product, setProduct] = useState<ProductProps>();

  // url에서 id를 찾아 해당 데이터를 불러오기 위한 변수 선언
  const location = useLocation();
  const searchParams = new URLSearchParams(location.pathname);
  const productId = searchParams.size;

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const data = await getProductData(productId);
        setProduct(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchProductData();
  }, [productId]);

  return (
    <AppLayout pageTitle="Detail">
      {!product ? (
        <LoadingPage />
      ) : (
        <>
          <ImageContainer>
            <Image src={product.image} alt="제품 이미지" />
          </ImageContainer>
          <AboveTitleContainer>
            <CategoryBagde>{product.category}</CategoryBagde>
            <StarsContainer>
              <BiSolidStar />
              <span>{product.rating.rate}</span>
            </StarsContainer>
          </AboveTitleContainer>
          <Title>{product.title}</Title>
          <div></div>
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
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 6px 6px;
  color: white;
  background-color: rgba(40, 121, 255, 1);
  width: fit-content;
  margin-bottom: 4px;
`;

const StarsContainer = styled.div``;

const Title = styled.h1`
  font-size: 20px;
  line-height: 1.4;
  margin: 8px 0 16px;
`;
