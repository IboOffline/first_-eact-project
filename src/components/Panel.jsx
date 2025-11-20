export default function Panel({ title, isActive, activate, children }) {
    if (isActive) {
        return <p>{children}</p>
    } else {
        return (
            <button onClick={() => activate()} className="block">
                {title}
            </button>
        )
    }
}