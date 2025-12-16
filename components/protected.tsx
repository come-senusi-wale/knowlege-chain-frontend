export default function Protected({ allowed, children }) {
    if (!allowed) return <p>Verify your email to continue</p>
    return children
    }