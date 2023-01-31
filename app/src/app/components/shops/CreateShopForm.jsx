import { useContext, useState } from "react";
import { UserContext } from "../../../src/context/UserContext";
import ShopsService from "../../../src/services/shops.service";

const CreateAshop = () => {
  const [shop, setShop] = useState({});
  const { user } = useContext(UserContext);
  const handleChange = (e) => {
    setShop({ ...shop, [e.target.name]: e.target.value });
    console.log(shop);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    shop.user = user._id;
    console.log(shop);
    try {
      await ShopsService.createShop(shop);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Create a Shop</h1>
      <form>
        <input
          type="text"
          name="name"
          onChange={(e) => handleChange(e)}
          placeholder="Name"
        />
        <input
          type="text"
          name="description"
          onChange={(e) => handleChange(e)}
          placeholder="Description"
        />
        <input
          type="text"
          name="logo"
          onChange={(e) => handleChange(e)}
          placeholder="Lien du logo"
        />
        <input
          type="text"
          name="adress"
          onChange={(e) => handleChange(e)}
          placeholder="Location"
        />
        <button onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
};

export default CreateAshop;
