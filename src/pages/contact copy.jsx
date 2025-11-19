import { useState } from "react";
import Container from "../components/container.jsx";
import ContactForm from "../components/contact-form.jsx";
import SubmissionSuccess from "../components/submission-success.jsx";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleFormSuccess() {
    setIsSubmitted(true);
  }

  return (
    <Container>
      <section className="font-poppins text-sky-900 bg-white min-h-screen w-full">
        <h2 className="text-xl font-semibold mb-4">Kontakt</h2>

        {!isSubmitted ? (
          <ContactForm onSubmitSuccess={handleFormSuccess} />
        ) : (
          <SubmissionSuccess />
        )}
      </section>
    </Container>
  );
}