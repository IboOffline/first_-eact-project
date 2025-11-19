export default function ClickButton() {
  function handleClick() {
    console.log("Button wurde geklickt!");
  }

  return (
    <button className="p-4 m-2 text-white rounded-lg w-50 text-center" onClick={handleClick}>
      Klick mich
    </button>
    
  );
}