import BookCards from "./BookCards"
import ResultsStatus from './ResultsStatus'

import SearchBar from './SearchBar'
import star_outline from '../assets/Star_outline.svg'
import Footer from './Footer'
import Title from './Title'
import Button from './Button'

export default function Home({isPending, statusMessage, query, content, handleSearch}) {

    return (
        <>
        <header>
            <Title value="BookSearch" />
            <Button href="#" icon={[star_outline, "star icon"]} classes={["btn-fill", "btn-l", "btn-icon"]} text="Favourites" />
            <SearchBar handleSearch={handleSearch} query={query}/>
        </header>
        <main id="main">
            <ResultsStatus isPending={isPending} statusMessage={statusMessage} query={query} content={content} />
            {!isPending && <BookCards content={content} /> }
        </main>
        <Footer />
        </>
    )
}