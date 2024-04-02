import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import star_outline from './assets/Star_outline.svg'
import BookCards from './components/BookCards'
import Footer from './components/Footer'
import Title from './components/Title'
import ResultsStatus from './components/ResultsStatus'
import Button from './components/Button'
import useFetch from './customHooks/useFetch'

function App() {

  /*const statusMessages = {
    "loading" : "Loading results...",
    "min_words" : "Write at least 3 characters",
    "error" : "Could not load books :( "
  } */

  //const [content, setContent] = useState([])
  const [query, setQuery] = useState("james bond")
  //const [isPending, setIsPending] = useState(true)
  //const [statusMessage, setStatusMessage] = useState(statusMessages.loading)
  const {content, isPending, statusMessage} = useFetch(query, "key,title,author_name,isbn,cover_i,average_ratings,amazon_id,first_publish_year")




  /*const getData = async(title) => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${title}&fields=key,title,author_name,isbn,cover_i,average_ratings,amazon_id,first_publish_year`)
      const data = await response.json()

      setContent(data.docs)

      setIsPending(false)
    }
    catch {
      setStatusMessage(statusMessages.error)
      console.error("det har skjedd en feil")
    }
  }

  useEffect(() => {

    if(query.length >= 3) {
      const timer = setTimeout(() => getData(query), 700)

      setStatusMessage(statusMessages.loading)

      return () => clearTimeout(timer)
    }
    else {
      setStatusMessage(statusMessages.min_words)
    }

  }, [ query ] ) */


  const handleSearch = (e) => {
    e.preventDefault()
    setIsPending(true)

    setQuery(e.target.value)
  }

  console.log(content)

  return (
    <>
      <header>
        <Title value="BookSearch" />
        <Button href="#" icon={[star_outline, "star icon"]} classes={["btn-fill", "btn-l", "btn-icon"]} text="Favourites" />
        <SearchBar handleSearch={handleSearch} query={query}/>
      </header>
      <main>
        <ResultsStatus isPending={isPending} statusMessage={statusMessage} query={query} content={content} />
        { !isPending && <BookCards content={content} /> }
      </main>
      <Footer />
    </>
  )
}

export default App
