import Button from '../components/Button'

export default function Hero() {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold text-brand-700 mb-4">Hi, ich bin Ibrahim Can Uyan</h1>
      <p className="text-lg text-gray-600 mb-6">
        Webentwickler & kreativer Denker aus Leidenschaft.
      </p>
      <Button label="Kontaktiere mich" href="#contact" />
    </section>
  )
}