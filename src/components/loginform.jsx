import { useState } from "react";

export default function MyForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();


    const isValid =
      email === "jana@email.de" && password === "123456";

    if (isValid) {
      setIsLoggedIn(true);
    } else {
      alert("Email oder Passwort ist falsch.");
    }

    setEmail("");
    setPassword("");
  }


  if (isLoggedIn) {
    return <p className="mt-4 text-green-700">User ist angemeldet</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <div>
        <label className="block mb-1 text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          className="border rounded px-2 py-1 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email eingeben"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">
          Passwort
        </label>
        <input
          type="password"
          className="border rounded px-2 py-1 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Passwort eingeben"
        />
      </div>

      <button
        type="submit"
        className="bg-sky-600 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </form>
  );
}