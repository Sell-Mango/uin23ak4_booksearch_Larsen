import { useState, useEffect } from 'react'
import star_outline from './assets/Star_outline.svg'
import Search from './assets/Search.svg'
import testimg from './img/5cbe235ddaa9a96cfe352384.webp'

function App() {

  const cover_img_url = "https://covers.openlibrary.org/a/olid/"

  const [numResults, setNumResults] = useState()
  const [content, setContent] = useState([])
  const [query, setQuery] = useState("james bond")

  const getData = async(title) => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${title}`)
      const data = await response.json()
      console.log(data.docs)
      
      setNumResults(data.numFound)
      setContent(data.docs)
    }
    catch {
      console.error("det har skjedd en feil")
    }
  }

  useEffect(() => {
    getData(query)
  }, [])

  return (
    <>
      <header>
        <h1>BookSearch</h1>
        <a href="#" className="btn btn-icon btn-fill btn-l"><span>Favourites</span><img src={star_outline} alt="star-icon" /></a>
        <form className="searchBar">
          <input type="text" placeholder="Search your favourite books..." />
          <img src={Search} alt="" />
        </form>
      </header>
      <main>
        <p className="searchResults">Showing {numResults} results for: {query}</p>
        {content.map((book) => (
          <article className="bookCard" key={book.key}>
            <section>
              <span className="rating">Rating: {book.ratings_average}/6</span>
              <h2>{book.title}</h2>
              <p>Author: {book.author_name}</p>
              <p>First published: {book.first_publish_year}</p>
              <a href="#" className="btn btn-m">Read more</a>
            </section>
            <button><img src={star_outline} alt="" /></button>
            <picture>
              <img src={`https://covers.openlibrary.org/a/olid/${book.cover_edition_key}.jpg`} alt="" />
            </picture>
          </article>

        ))}

      </main>
      <footer>
        <h2>BookSearch</h2>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Favourites</a>
            </li>
          </ul>
        </nav>
        <p>By Kjell-Magne Larsen</p>
      </footer>
    </>
  )
}

export default App
