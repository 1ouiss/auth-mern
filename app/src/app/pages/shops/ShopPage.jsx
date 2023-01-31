import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShopsService from "../../../src/services/shops.service";

const ShopPage = () => {
  const { id } = useParams();

  const [shop, setShop] = useState({});

  useEffect(() => {
    const fetchShop = async () => {
      const response = await ShopsService.getOneShop(id);
      setShop(response);
    };
    fetchShop();
  }, [id]);

  return (
    <div>
      {shop.name === undefined ? <h1>Loading...</h1> : null}
      {shop && (
        <div>
          <h1>{shop.name}</h1>
          <img src={shop.imageUrl} alt={shop.name} />
          <p>{shop.address}</p>
          <p>{shop.description}</p>
        </div>
      )}
    </div>
  );
};

export default ShopPage;
