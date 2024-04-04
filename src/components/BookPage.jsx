import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../customHooks/useFetch"
import { Rating } from "react-simple-star-rating"
import Title from './Title'
import Button from './Button'
import Footer from './Footer'
import star_outline from '../assets/Star_outline.svg'
import Arrow_right_fill from '../assets/Arrow_right_fill.svg'
import PlaceholderImg from '../assets/placeholder_img.jpg'

export default function BookPage() {

    const { id, title } = useParams()
    const navigate = useNavigate()

    // Her kunne jeg heller benyttet books/works API til å hente ut en spesifikk bok: https://openlibrary.org/works/{id}.json. Men hadde ikke fått egenskaper som rating, first_publish_year, author_name osv uten å for eksempel kalle eget API for å hente ut dette
    const { content, isPending } = useFetch(`https://openlibrary.org/search.json?title=${title}&fields=key,title,author_name,isbn,cover_i,ratings_average,first_publish_year,first_sentence`)
    
    // Gjenoppretter strukturen til key
    const bookId = `/works/${id}`
    // Ser etter og filterer på bok med bestemt key
    const contentFilter = content.docs?.filter((book) => {
        return book.key === bookId
    })
    
    return (
        <>
        <header>
            <button className="backBtn" onClick={() => navigate(-1)}><img src={Arrow_right_fill} alt="" />Back</button>
            {!isPending && <Title value={contentFilter[0].title} /> }
            <Button href="#" icon={[star_outline, "star icon"]} classes={["btn-fill", "btn-l", "btn-icon"]} text="Add to favourite" />
        </header>
        <main id="main" className="bookContent">
            <section>
                <p className="text-l"><span className="w-600">Author: </span> {!isPending && contentFilter[0].author_name}</p>
                <p><span className="w-600">First published: </span>{!isPending && contentFilter[0].first_publish_year}</p>
                <span className="rating">Rating: {!isPending && contentFilter[0].ratings_average ? <Rating initialValue={contentFilter[0].ratings_average} allowFraction={true} readonly={true} /> : "No rating"}</span>
                {!isPending && <p>{!isPending && contentFilter[0].first_sentence}</p> }
                {!isPending && (<Button href={`https://www.amazon.com/s?k=${contentFilter[0].isbn[0]}`} classes={["btn btn-m"]} text="Find on Amazon" />)}
                
            </section>
            {!isPending && <img src={contentFilter[0].cover_i ? `https://covers.openlibrary.org/b/id/${contentFilter[0].cover_i}-L.jpg` : PlaceholderImg} alt={`${contentFilter[0].title} cover image`} /> }
        </main>
        <Footer />
        </>
    )
}