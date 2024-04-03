import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import useFetch from "../customHooks/useFetch"
import star_outline from '../assets/Star_outline.svg'
import Arrow_right_fill from '../assets/Arrow_right_fill.svg'
import Title from './Title'
import Button from './Button'
import Footer from './Footer'

export default function BookPage() {

    const { id } = useParams()
    const navigate = useNavigate()

    const { content } = useFetch("https://openlibrary.org/works/" + id + ".json")

    //const { content: authorInfo } = useFetch("https://openlibrary.org/authors/OL29227A.json")
    //console.log(content.authors?.[0].author.key)
    return (
        <>
        <header>
            <button className="backBtn" onClick={() => navigate(-1)}><img src={Arrow_right_fill} alt="" />Back</button>
            <Title value={content?.title} />
            <Button href="#" icon={[star_outline, "star icon"]} classes={["btn-fill", "btn-l", "btn-icon"]} text="Add to favourite" />
        </header>
        <main className="bookContent">
            <section>
                <p className="text-l"><span className="w-600">Author: </span></p>
                <p><span className="w-600">First published: </span>1953</p>
                <p>Rating: </p>
                <p>{content.description?.value}</p>
            </section>
            <img src={`https://covers.openlibrary.org/b/id/${content?.covers}-L.jpg`} alt="" />
        </main>
        <Footer />
        </>
    )
}