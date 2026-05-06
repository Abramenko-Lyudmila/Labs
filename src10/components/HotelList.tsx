import useWishlistStore from "../store/useWishlistStore";

const hotels = [
  { id: 1, name: "Hilton", city: "Kyiv", price: 150 },
  { id: 2, name: "Marriott", city: "Lviv", price: 120 },
  { id: 3, name: "Radisson", city: "Kyiv", price: 200 },
];

const HotelList = () => {
  const addHotel = useWishlistStore((s) => s.addHotel);

  return (
    <div style={{ padding: 20 }}>
      <h2>Готелі</h2>

      {hotels.map((h) => (
        <div key={h.id}>
          <h3>{h.name}</h3>
          <p>
            {h.city} - ${h.price}
          </p>

          <button onClick={() => addHotel(h)}>Додати в обране</button>
        </div>
      ))}
    </div>
  );
};

export default HotelList;
