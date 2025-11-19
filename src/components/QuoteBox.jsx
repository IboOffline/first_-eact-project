import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_QUOTE_API_URL;
console.log("API_URL:", API_URL);

export default function QuoteBox() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchQuote() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Fehler beim Laden des Zitats");
      }

      const data = await response.json();
      setQuote(data.slip.advice);
      setAuthor(""); 
    } catch (err) {
      setError(err.message || "Unbekannter Fehler");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-box">
      {loading && <p>Lade Zitat...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <>
          <p style={{ fontStyle: "italic" }}>"{quote}"</p>
        </>
      )}
    </div>
  );
}