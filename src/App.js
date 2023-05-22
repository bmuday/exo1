import Header from "./components/Header";
import Article from "./components/Article";
import Aside from "./components/Aside";

function App() {
  return (
    <div id="app">
      <Header />
      <div id="content">
        <Article />
        <Aside />
      </div>
    </div>
  );
}

export default App;
