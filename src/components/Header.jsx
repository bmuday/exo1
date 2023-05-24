const Header = ({ changeCSS }) => {
  return (
    <header id="header" style={changeCSS ? { background: "red" } : {}}>
      <h1 id="title">React Blog</h1>
      <ul id="navbar" className="list">
        <li className="list-elements">
          <a href="#">Home</a>
        </li>
        <li className="list-elements">
          <a href="#">About</a>
        </li>
        <li className="list-elements">
          <a href="#">Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
