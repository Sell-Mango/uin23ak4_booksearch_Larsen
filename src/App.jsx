import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import useFetch from './customHooks/useFetch'
import Home from './components/Home'
import BookPage from './components/BookPage'

function App() {

  const [query, setQuery] = useState("james bond")
  // Custom hook for å fetche data fra API
  // Henter kun ut bestemte felter for å redusere ventetid
  const {content, isPending, statusMessage} = useFetch(`https://openlibrary.org/search.json?title=${query}&fields=key,title,author_name,isbn,cover_i,ratings_average,first_publish_year&limit=20`)
  
  const handleSearch = (e) => {
    e.preventDefault()

    setQuery(e.target.value)
  }

  return (
    <>
    <Router>
      <a href="#main" className="skip-link">Skip to main content</a>
      <Routes>
        <Route path="/" element={<Home isPending={isPending} statusMessage={statusMessage} query={query} content={content.docs} handleSearch={handleSearch} />} />
        <Route path='/works/:id/:title' element={<BookPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
