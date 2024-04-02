import Search from '../assets/Search.svg'

export default function SearchBar({handleSearch, query}) {

    return (
        <form className="searchBar">
        <input type="text" onChange={handleSearch} value={query} placeholder="Search your favourite books..." />
        <img src={Search} alt="" />
      </form>
    )
}