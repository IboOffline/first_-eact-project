import { useRef } from "react";

export default function FocusSetter() {
  const inputRef = useRef(null);

  function setFocus() {
    inputRef.current.focus();
  }

  return (
    <div className="p-4 m-2">

      <input placeholder="Eingabe" ref={inputRef} />
      <button className="text-white" onClick={setFocus}>Setze Fokus</button>
    </div>
  );
}