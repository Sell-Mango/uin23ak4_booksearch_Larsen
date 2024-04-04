import Button from './Button'
import star_outline from '../assets/Star_outline.svg'
import PlaceholderImg from '../assets/placeholder_img.jpg'
import { Rating } from 'react-simple-star-rating'

export default function BookCard({ book }) {

  return (
        <article className="bookCard" key={book.key}>
          <section>
            <span className="rating">Rating: {book.ratings_average ? ( <Rating initialValue={book.ratings_average} allowFraction={true} readonly={true} />) : "No rating" }</span>
            <h2>{book.title}</h2>
            <p>Author: {book.author_name}</p>
            <p>First published: {book.first_publish_year}</p>
            <Button href={`${book.key}/${book.title}`} classes={["btn btn-m"]} text="Read more" />
          </section>
          <button><img src={star_outline} alt="" /></button>
          <picture>
            <img src={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : PlaceholderImg} alt="" /> 
          </picture>
        </article>
  )
}