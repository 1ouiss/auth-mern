const ShopsList = ({ shops }) => {
  return (
    <div>
      {shops.map((shop) => (
        <div key={shop._id}>
          <img src={shop.image} alt={shop.name} />
          <h2>{shop.name}</h2>
          <p>{shop.address}</p>
          <p>{shop.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ShopsList;
