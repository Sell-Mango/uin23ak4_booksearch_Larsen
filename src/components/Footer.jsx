import { Link } from "react-router-dom"

export default function Footer() {

    return (
        <footer>
        <h2>BookSearch</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#">Favourites</a>
            </li>
          </ul>
        </nav>
        <p>By Kjell-Magne Larsen</p>
      </footer>
    )
}