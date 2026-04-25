import { useEffect, useState } from "react";

const API_URL = "https://69ecd170af4ff533142b6a89.mockapi.io/";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");

  // GET
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Ошибка загрузки данных");

      const data = await res.json();
      setBooks(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // POST
  const addBook = async (e: React.FormEvent) => {
    e.preventDefault();

    const newBook = {
      title,
      author,
      year: Number(year),
      genre,
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBook),
      });

      const data = await res.json();
      setBooks([...books, data] as any);

      setTitle("");
      setAuthor("");
      setYear("");
      setGenre("");
    } catch (err) {
      alert("Ошибка добавления");
    }
  };

  // DELETE
  const deleteBook = async (id: string) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      setBooks(books.filter((b: any) => b.id !== id));
    } catch (err) {
      alert("Ошибка удаления");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Каталог книг 📚</h1>

      {/* FORM */}
      <form onSubmit={addBook} style={{ marginBottom: 20 }}>
        <input
          placeholder="Название"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Автор"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          placeholder="Год"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          placeholder="Жанр"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />

        <button type="submit">Добавить</button>
      </form>

      {/* STATES */}
      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* LIST */}
      <div style={{ display: "grid", gap: 10 }}>
        {books.map((book: any) => (
          <div
            key={book.id}
            style={{
              border: "1px solid #ccc",
              padding: 10,
              borderRadius: 5,
            }}
          >
            <h3>{book.title}</h3>
            <p>Автор: {book.author}</p>
            <p>Год: {book.year}</p>
            <p>Жанр: {book.genre}</p>

            <button onClick={() => deleteBook(book.id)}>Удалить</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
