import { useEffect, useState } from "react";
import { ProductProps, ProductsList } from "./types/types";
import { getData } from "./api/api";
import { Link } from "react-router-dom";

function App() {
  const [productList, setProductList] = useState<ProductsList>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setProductList(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

  return (
    <ul
      style={{
        display: "grid",
        gridTemplateRows: "1fr 1fr 1fr 1fr",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        rowGap: "16px",
        columnGap: "16px",
        margin: "40px",
      }}
    >
      {productList?.map((product: ProductProps) => (
        <li key={product.id} style={{ maxWidth: "180px", margin: "0 auto" }}>
          <Link
            to={`/products/${product.id}`}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textDecoration: "none",
              color: "#222",
              textAlign: "center",
              gap: "8px",
            }}
          >
            <img src={`${product.thumbnailUrl}`} />
            <p>{product.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default App;
