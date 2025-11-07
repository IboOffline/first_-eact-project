export default function Button({ label, href }) {
  return (
    <a
      href={href}
      className="inline-block bg-brand-500 hover:bg-brand-600 text-white px-5 py-2 rounded-lg transition"
    >
      {label}
    </a>
  )
}