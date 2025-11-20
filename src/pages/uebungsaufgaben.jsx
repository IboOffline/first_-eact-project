import FileInput from "../components/FileInput.jsx";
import FocusInput from "../components/FocusInput.jsx";
import ClickButton from "../components/ClickButton.jsx";
import Counter from "../components/Counter.jsx";
import Container from "../components/container.jsx";
import Login from "../components/loginform.jsx"
import Expression from "../components/expressions.jsx";

export default function Uebungsaufgaben() {
    return (


        <main className="font-poppins text-sky-900 bg-white min-h-screen w-full">
            <Container>
                <div className="flex flex-col items-center gap-8">
                    <Counter />
                    <FileInput />
                    <FocusInput />
                    <ClickButton />
                    <Login />
                    <Expression />
                </div>
            </Container>
        </main>

    );
}
