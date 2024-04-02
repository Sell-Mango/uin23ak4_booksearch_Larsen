import { useParams } from "react-router-dom"
import useFetch from "../customHooks/useFetch"
export default function BookPage() {

    const { id } = useParams()
    const { content: book, isPending, statusMessage } = useFetch("https://openlibrary.org/works/" + id + ".json")
    return (
        <>
        {isPending && (<div>Loading...</div>) }
        { book && (<h1>Hello</h1>) }
        </>
    )
}