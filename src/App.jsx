import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <section>
          <Banner></Banner>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
