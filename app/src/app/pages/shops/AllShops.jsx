import ShopsList from "../../components/shops/ShopsList";
import { useEffect, useState } from "react";
import ShopsService from "../../../src/services/shops.service";

const AllShops = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetchShops();
  }, []);

  const fetchShops = async () => {
    try {
      const shops = await ShopsService.getAll();
      setShops(shops);
      console.log(shops);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>All Shops :</h1>
      <ShopsList shops={shops} />
    </div>
  );
};

export default AllShops;
