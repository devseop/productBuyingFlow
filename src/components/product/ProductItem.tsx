import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { ProductProps } from "../../types/types";

export const ProductItem = ({ data }: { data: ProductProps }) => {
  const { id, title, price, category, image } = data;

  return (
    <li>
      <Item to={`/products/${id}`}>
        <div>
          <img src={image} alt="제품 이미지" />
        </div>
        <InfoContainer>
          <CategoryBagde>{category}</CategoryBagde>
          <Title>{title}</Title>
          <Price>${price}</Price>
        </InfoContainer>
      </Item>
    </li>
  );
};

const Item = styled(Link)`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: flex-start;
  color: #222;
  text-decoration: none;
  text-align: center;

  div {
    display: flex;

    img {
      width: 100px;
      height: 100px;
      object-fit: contain;
    }
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const CategoryBagde = styled.span`
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  color: rgba(80, 80, 80, 0.8);
  margin-bottom: 4px;
`;

const Title = styled.p`
  color: rgba(34, 34, 34, 1);
  font-size: 18px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2em;
  height: 2.4em;
  margin-bottom: 12px;
`;

const Price = styled.span`
  color: rgba(40, 121, 255, 1);
  font-size: 18px;
  font-weight: 700;
`;
