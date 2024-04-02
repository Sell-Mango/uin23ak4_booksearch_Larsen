import { useState, useEffect } from "react"

function useFetch(query, fields) {

    const statusMessages = {
        "loading" : "Loading results...",
        "min_words" : "Write at least 3 characters",
        "error" : "Could not load books :( "
      }

    const [content, setContent] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [statusMessage, setStatusMessage] = useState(statusMessages.loading)


    const getData = async(query) => {
        try {
          const response = await fetch(`https://openlibrary.org/search.json?title=${query}&fields=${fields}&limit=20`)
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
        
        setIsPending(true)
        if(query.length >= 3) {
          const timer = setTimeout(() => getData(query), 700)
    
          setStatusMessage(statusMessages.loading)
    
          return () => clearTimeout(timer)
        }
        else {
          setStatusMessage(statusMessages.min_words)
        }
    
      }, [ query ] )
    
      return { content, isPending, statusMessage }
}

export default useFetch