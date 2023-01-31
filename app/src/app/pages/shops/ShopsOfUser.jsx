import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../src/context/UserContext";
import ShopsService from "../../../src/services/shops.service";
import ShopsList from "../../components/shops/ShopsList";

const ShopOfUser = () => {
  const { user } = useContext(UserContext);
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetchShops();
  }, []);

  const fetchShops = async () => {
    try {
      const shops = await ShopsService.getShopsOfUser();
      console.log(shops);
      setShops(shops);
      console.log(shops);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>My Shops</h1>
      <ShopsList shops={shops} user={user} />
    </div>
  );
};

export default ShopOfUser;
