import Search from '../assets/Search.svg'

export default function SearchBar({handleSearch, query}) {

    return (
        <form className="searchBar">
        <label htmlFor="sBar" hidden>Search your favourite books</label>
        <input type="text" id="sBar" onChange={handleSearch} value={query} placeholder="Search your favourite books..." />
        <img src={Search} alt="" />
      </form>
    )
}