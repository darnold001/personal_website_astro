import type { SyntheticEvent } from "react"


export default function ContactForm({ children }) {

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        console.log(e.target)
        window.alert(e)
    }

    return <form onSubmit={handleSubmit}>
        {children}
    </form>
}