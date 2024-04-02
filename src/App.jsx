import { useState } from 'react'
import useFetch from './customHooks/useFetch'
import SearchBar from './components/SearchBar'
import star_outline from './assets/Star_outline.svg'
import BookCards from './components/BookCards'
import Footer from './components/Footer'
import Title from './components/Title'
import ResultsStatus from './components/ResultsStatus'
import Button from './components/Button'

function App() {

  const [query, setQuery] = useState("james bond")
  const {content, isPending, statusMessage} = useFetch(query, "key,title,author_name,isbn,cover_i,average_ratings,amazon_id,first_publish_year,id_amazon")

  const handleSearch = (e) => {
    e.preventDefault()

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
