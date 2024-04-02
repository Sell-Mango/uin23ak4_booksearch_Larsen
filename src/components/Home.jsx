import BookCards from "./BookCards"
import ResultsStatus from './ResultsStatus'

export default function Home({isPending, statusMessage, query, content}) {

    return (
        <>
        <ResultsStatus isPending={isPending} statusMessage={statusMessage} query={query} content={content} />
        {!isPending && <BookCards content={content} /> }
        </>
    )
}