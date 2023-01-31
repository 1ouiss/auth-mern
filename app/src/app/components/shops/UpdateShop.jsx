import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShopsService from "../../../src/services/shops.service";

const UpdateShop = () => {
  const { shopId } = useParams();
  const [shop, setShop] = useState({});

  useEffect(() => {
    fetchShop();
    console.log("fetch shop");
    console.log(shop);
  }, [shopId]);

  const fetchShop = async () => {
    try {
      const shop = await ShopsService.getOneShop(shopId);
      console.log(shop);
      setShop(shop);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShop({ ...shop, [name]: value });
    console.log(shop);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await ShopsService.updateShop(shopId, shop);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Update Shop</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={shop && shop.name}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          id="address"
          value={shop && shop.address}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={shop && shop.description}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="imageUrl">imageUrl</label>
        <input
          type="text"
          name="imageUrl"
          id="imageUrl"
          value={shop && shop.imageUrl}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateShop;
