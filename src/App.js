import Cursor from "./components/cursor"
import "./assets/styles/style.css"
import "./assets/styles/media.css"
import Nav from "./layouts/Nav";
import Header from "./sections/header/Header";
import Portfolio from "./sections/portfolio/Portfolio";
function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <div className="main">
        <Header/>
        <Portfolio/>
      </div>
    </>
  );
}

export default App;
