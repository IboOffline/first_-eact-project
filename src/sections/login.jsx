import Login from "../components/loginform.jsx";
import Container from "../components/container.jsx";

export default function LoginPage() {
  return (

    <Container>
    <section className="font-poppins text-sky-900 bg-white min-h-screen w-full">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <Login />
    </section>
    </Container>
  );
}