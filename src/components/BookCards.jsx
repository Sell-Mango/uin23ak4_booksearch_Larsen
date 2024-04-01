import BookCard from "./BookCard"


export default function BookCards({ content }) {
    return (
        content.map((value) => <BookCard book={value} key={value.key}/> )
    )
}