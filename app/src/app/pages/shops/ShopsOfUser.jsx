import { useContext } from "react";
import { UserContext } from "../../../src/context/UserContext";
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
      setShops(shops);
      console.log(shops);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ShopsList shops={shops} />
    </div>
  );
};

export default ShopOfUser;
