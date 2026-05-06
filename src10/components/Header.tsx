import useAuthStore from "../store/useAuthStore";

const Header = () => {
  const user = useAuthStore((s) => s.user);
  const login = useAuthStore((s) => s.login);
  const logout = useAuthStore((s) => s.logout);

  return (
    <header style={{ background: "#222", color: "#fff", padding: 10 }}>
      <h2>Hotel Booking</h2>

      {user ? (
        <>
          <span>Привіт, {user.name}</span>
          <button onClick={logout}>Вийти</button>
        </>
      ) : (
        <button onClick={() => login("Admin")}>Увійти</button>
      )}
    </header>
  );
};

export default Header;
