import { Link } from "react-router-dom";
import ShopsService from "../../../src/services/shops.service";

const ShopsList = ({ shops, user }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      await ShopsService.deleteShop(id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {shops.map((shop) => (
        <div key={shop._id}>
          <img src={shop.imageUrl} alt={shop.name} />
          <h2>{shop.name}</h2>
          <p>{shop.address}</p>
          <p>{shop.description}</p>
          <Link to={`/shop/${shop._id}`}>
            <button>View Shop</button>
          </Link>
          {user != "" && (
            <div>
              <Link to={`/shops/${shop._id}`}>
                <button>Edit Shop</button>
              </Link>
              <button onClick={(e) => handleDelete(e, shop._id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ShopsList;
