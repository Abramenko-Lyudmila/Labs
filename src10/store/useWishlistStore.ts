import { create } from 'zustand';

type Hotel = {
  id: number;
  name: string;
  city: string;
  price: number;
};

type WishlistState = {
  wishlist: Hotel[];

  addHotel: (hotel: Hotel) => void;
  removeHotel: (id: number) => void;
  clearWishlist: () => void;

  filterByCity: (city: string) => Hotel[];
};

const useWishlistStore = create<WishlistState>((set, get) => ({
  wishlist: [],

  addHotel: (hotel) =>
    set((state) => {
      const exists = state.wishlist.find((h) => h.id === hotel.id);
      if (exists) return state;

      return {
        wishlist: [...state.wishlist, hotel],
      };
    }),

  removeHotel: (id) =>
    set((state) => ({
      wishlist: state.wishlist.filter((h) => h.id !== id),
    })),

  clearWishlist: () => set({ wishlist: [] }),

  // 🔥 ФІЛЬТРАЦІЯ (обов'язково по завданню)
  filterByCity: (city) => {
    const { wishlist } = get();

    if (!city) return wishlist;

    return wishlist.filter((h) =>
      h.city.toLowerCase().includes(city.toLowerCase())
    );
  },
}));

export default useWishlistStore;