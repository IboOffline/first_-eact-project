import { useState } from "react";
import Accordeon from "../components/Accordeon";

export default function VocabularyGame({ vocabulary }) {
    const [isGameActive, setIsGameActive] = useState(false);

    return (
        <div>
            <h1>Vocabulary Game</h1>
            {isGameActive 
                ? <Accordeon vocabulary={vocabulary} /> 
                : <button onClick={() => setIsGameActive(true)}>Start Game</button>}
        </div>
    )
}