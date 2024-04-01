import star_outline from '../assets/Star_outline.svg'

export default function BookCard({ book }) {

  return (
        <article className="bookCard" key={book.key}>
          <section>
            { /*<span className="rating">Rating: <Rating initialValue={3.5} disableFillHover={true} /></span> */ }
            <h2>{book.title}</h2>
            <p>Author: {book.author_name}</p>
            <p>First published: {book.first_publish_year}</p>
            <a href={`https://www.amazon.com/s?k=${book.isbn}`} className="btn btn-m">Read more</a>
          </section>
          <button><img src={star_outline} alt="" /></button>
          <picture>
            <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt="" /> 
          </picture>
        </article>
  )
}