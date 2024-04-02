import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import useFetch from './customHooks/useFetch'
import Home from './components/Home'
import SearchBar from './components/SearchBar'
import star_outline from './assets/Star_outline.svg'
import Footer from './components/Footer'
import Title from './components/Title'
import Button from './components/Button'
import BookPage from './components/BookPage'

function App() {

  const [query, setQuery] = useState("james bond")
  const {content, isPending, statusMessage} = useFetch(`https://openlibrary.org/search.json?title=${query}&fields=key,title,author_name,isbn,cover_i,average_ratings,first_publish_year&limit=20`)
  
  const handleSearch = (e) => {
    e.preventDefault()

    setQuery(e.target.value)
  }

  console.log(content)

  return (
    <>
    <Router>
      <header>
        <Title value="BookSearch" />
        <Button href="#" icon={[star_outline, "star icon"]} classes={["btn-fill", "btn-l", "btn-icon"]} text="Favourites" />
        <SearchBar handleSearch={handleSearch} query={query}/>
      </header>
      <main>
      <Routes>
        <Route path="/" element={<Home isPending={isPending} statusMessage={statusMessage} query={query} content={content} />} />
        <Route path='/books/works/:id' element={<BookPage />} />
      </Routes>
      </main>
      <Footer />
    </Router>
    </>
  )
}

export default App
