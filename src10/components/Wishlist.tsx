import { useState } from "react";
import useWishlistStore from "../store/useWishlistStore";

const Wishlist = () => {
  const [city, setCity] = useState("");

  const wishlist = useWishlistStore((s) => s.wishlist);
  const removeHotel = useWishlistStore((s) => s.removeHotel);
  const clearWishlist = useWishlistStore((s) => s.clearWishlist);
  const filterByCity = useWishlistStore((s) => s.filterByCity);

  const filtered = filterByCity(city);

  return (
    <div style={{ padding: 20 }}>
      <h2>Обрані готелі</h2>

      <input
        placeholder="Фільтр по місту"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      {filtered.map((h) => (
        <div key={h.id}>
          <strong>{h.name}</strong>
          <p>
            {h.city} - ${h.price}
          </p>

          <button onClick={() => removeHotel(h.id)}>Видалити</button>
        </div>
      ))}

      <button onClick={clearWishlist}>Очистити</button>
    </div>
  );
};

export default Wishlist;
