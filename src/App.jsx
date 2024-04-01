import { useState, useEffect } from 'react'
import star_outline from './assets/Star_outline.svg'
import Search from './assets/Search.svg'


function App() {

  const [content, setContent] = useState([])
  const [query, setQuery] = useState("james bond")
  const [isPending, setIsPending] = useState(false)
  const [status, setStatus] = useState("Loading results...")

  const getData = async(title) => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${title}&fields=key,title,author_name,isbn,cover_i,average_ratings,amazon_id,first_publish_year`)
      const data = await response.json()

      setContent(data.docs)
      setIsPending(true)
    }
    catch {
      setStatus("Could not load books :(")
      console.error("det har skjedd en feil")
    }
  }

  useEffect(() => {
    getData(query)
  }, [query])

  console.log(content)

  const handleSearch = (e) => {
    e.preventDefault()
    setIsPending(false)
    setQuery(e.target.value)
  }

  return (
    <>
      <header>
        <h1>BookSearch</h1>
        <a href="#" className="btn btn-icon btn-fill btn-l"><span>Favourites</span><img src={star_outline} alt="star-icon" /></a>
        <form className="searchBar">
          <input type="text" onChange={handleSearch} value={query} placeholder="Search your favourite books..." />
          <img src={Search} alt="" />
        </form>
      </header>
      <main>
        { isPending ? <p className="searchResults">Showing {content.length} results for: {query}</p> : <p className='searchResults'>{status}</p> }
        {content.map((book, index) => (
          <article className="bookCard" key={book.key}>
            <section>
              { /*<span className="rating">Rating: <Rating initialValue={3.5} disableFillHover={true} /></span> */ }
              <h2>{book.title}</h2>
              <p>Author: {book.author_name}</p>
              <p>First published: {book.first_publish_year}</p>
              <a href={`https://www.amazon.com/s?k=${content[index].isbn}`} className="btn btn-m">Read more</a>
            </section>
            <button><img src={star_outline} alt="" /></button>
            <picture>
              <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt="" /> 
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
