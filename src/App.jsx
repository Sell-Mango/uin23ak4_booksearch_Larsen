import { useState, useEffect } from 'react'
import Search from './assets/Search.svg'
import star_outline from './assets/Star_outline.svg'
import BookCards from './components/BookCards'

function App() {

  const [content, setContent] = useState([])
  const [query, setQuery] = useState("james bond")
  const [isPending, setIsPending] = useState(true)
  const [status, setStatus] = useState("Loading results...")

  const getData = async(title) => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${title}&fields=key,title,author_name,isbn,cover_i,average_ratings,amazon_id,first_publish_year`)
      const data = await response.json()

      setContent(data.docs)

      setIsPending(false)
    }
    catch {
      setStatus("Could not load books :(")
      console.error("det har skjedd en feil")
    }
  }

  useEffect(() => {

    if(query.length >= 3) {
      const timer = setTimeout(() => getData(query), 500)

      return () => clearTimeout(timer)
    }
    else {
      setStatus("Write at least 3 characters")
    }

  }, [ query ] )

  const handleSearch = (e) => {
    e.preventDefault()
    setIsPending(true)

    setQuery(e.target.value)
  }

  console.log(content)
  console.log(query.length)

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
        { !isPending ? <p className="searchResults">Showing {content.length} results for: {query}</p> : <p className='searchResults'>{status}</p> }
        { !isPending && <BookCards content={content} /> }
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
