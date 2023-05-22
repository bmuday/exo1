const Header = () => {
  return (
    <header id="header">
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
