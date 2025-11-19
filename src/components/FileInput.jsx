import { useRef } from "react";

export default function FileSelector() {
  const fileInputRef = useRef(null);

  function submitHandler(e) {
    e.preventDefault();
    const file = fileInputRef.current.files[0];
    alert(`${file.name} wurde ausgewählt.`);
  }

  return (
    <div className="p-4 m-2">
    <form onSubmit={submitHandler}>
      <input type="file" ref={fileInputRef} />
      <button className="text-white" type="submit">Submit</button>
    </form>
    </div>
  );
}