import { useEffect, useState } from "react";
import Header from "./components/Header";
import Article from "./components/Article";
import Aside from "./components/Aside";

function App() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // onScroll
    const onScroll = () => setOffset(window.scrollY);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  let changeCSS = false;
  if (offset >= 20) changeCSS = true;

  console.log(offset);
  return (
    <div id="app">
      <Header changeCSS={changeCSS} />
      <div id="content">
        <Article />
        <Aside />
      </div>
    </div>
  );
}

export default App;
