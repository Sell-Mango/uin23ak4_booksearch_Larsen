import { useState, useEffect } from 'react'
import star_outline from './assets/Star_outline.svg'
import Search from './assets/Search.svg'
import testimg from './img/5cbe235ddaa9a96cfe352384.webp'

function App() {

  return (
    <>
      <header>
        <h1>BookSearch</h1>
        <a href="#" className="btn btn-icon btn-fill btn-l"><span>Favourites</span><img src={star_outline} alt="star-icon" /></a>
        <form className="searchBar">
          <input type="text" placeholder="Search your favourite books..." />
          <img src={Search} alt="" />
        </form>
      </header>
      <main>
        <p className="searchResults">Showing <span>6</span> results for: <span>James Bond</span></p>
        <article className="bookCard">
          <section>
            <span className="rating">Rating: 4.5/6</span>
            <h2>Casino Royale</h2>
            <p>Author: <span>Ian Flemming</span></p>
            <p>First published: <span>1953</span></p>
            <a href="#" className="btn btn-m">Read more</a>
          </section>
          <button><img src={star_outline} alt="" /></button>
          <picture>
            <img src={testimg} alt="" />
          </picture>
        </article>

        <article className="bookCard">
          <section>
            <span>4.5/6</span>
            <h2>Casino Royale</h2>
            <p>Author: <span>Ian Flemming</span></p>
            <p>First published: <span>1953</span></p>
            <a href="#" className="btn btn-m">Read more</a>
          </section>
          <button><img src={star_outline} alt="" /></button>
          <picture>
            <img src={testimg} alt="" />
          </picture>
        </article>

      </main>
      <footer>
        <h2>BookSearch</h2>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Favourites</a>
            </li>
          </ul>
        </nav>
        <p>By Kjell-Magne Larsen</p>
      </footer>
    </>
  )
}

export default App
