import { useState, useEffect } from "react"

// Custom hook for å fetche data fra API
function useFetch(query, varName) {

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
          const response = await fetch(query)
          const data = await response.json()
    
          setContent(data)
          setIsPending(false)
        }
        catch {
          setStatusMessage(statusMessages.error)
          console.error("det har skjedd en feil")
        }
      }
    
      useEffect(() => {
        
        setIsPending(true)
        // Starter ikke søk med mindre det er skrevet tre bokstaver. Gir beskjed til bruker om dette.
        if(query.length >= 3) {
          // SetTimeout sørger for at APIet ikke fetches mens bruker skriver.
          const timer = setTimeout(() => getData(query), 700)
          setStatusMessage(statusMessages.loading)
    
          return () => clearTimeout(timer)
        }
        else {
          setStatusMessage(statusMessages.min_words)
        }
    
      }, [ query ] )
      
      // Returnerer innhold fra API, true eller false dersom API fetches og en statusmelding
      return { content, isPending, statusMessage }
}

export default useFetch