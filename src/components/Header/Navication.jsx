import "./Navication.css";

function Navication() {
  return (
    <div>
      <nav className="navigation">
        <ul className="nav-list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">AudioBooks</a>
          </li>
          <li>
            <a href="/contact">Ebooka</a>
          </li>
          <li>
            <a href="/contact">Podcasts</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navication;
