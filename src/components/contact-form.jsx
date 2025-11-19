import { useState } from "react";

export default function ContactForm({ onSubmitSuccess }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(event) {
        event.preventDefault();


        console.log("Kontaktformular abgeschickt:", {
            name,
            email,
            message,
        });


        setName("");
        setEmail("");
        setMessage("");

        if (typeof onSubmitSuccess === "function") {
            onSubmitSuccess();
        }
    }

    const isFormValid = name.trim() !== "" && email.trim() !== "" && message.trim() !== "";

    return (
        <form onSubmit={handleSubmit} className="mt-4 space-y-4 max-w-md">
            <div>
                <label className="block mb-1 text-sm font-medium">
                    Name
                </label>
                <input
                    type="text"
                    className="border rounded px-2 py-1 w-full"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Dein Name"
                />
            </div>

            <div>
                <label className="block mb-1 text-sm font-medium">
                    Email
                </label>
                <input
                    type="email"
                    className="border rounded px-2 py-1 w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="deine@email.de"
                />
            </div>

            <div>
                <label className="block mb-1 text-sm font-medium">
                    Nachricht
                </label>
                <textarea
                    className="border rounded px-2 py-1 w-full min-h-[120px]"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Deine Nachricht..."
                />
            </div>

            <button
                type="submit"
                disabled={!isFormValid}
                className={`px-4 py-2 rounded text-white 
          ${isFormValid ? "bg-sky-600 hover:bg-sky-700" : "bg-sky-300 cursor-not-allowed"}`}
            >
                Abschicken
            </button>
        </form>
    );
}