import "./Header.css";
import Navication from "./Navication";
import SearchBox from "./SearchBox";
import User from "./User";

function Header() {
  return (
    <div className="header">
      <div className="contaner">
        <h1 className="logo">Kotobna</h1>
        <SearchBox />
        <User />
      </div>
      <Navication />
    </div>
  );
}

export default Header;
