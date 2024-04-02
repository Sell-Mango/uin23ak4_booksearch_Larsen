
export default function ResultsStatus({isPending, statusMessage, query, content}) {

    return (
        !isPending ? <p className="searchResults">Showing {content.length} results for: {query}</p>
         : <p className='searchResults'>{statusMessage}</p>
    )
}