import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import GetStarted from "./components/starter/GetStarted";
import Stats from "./components/stats/Stats";

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
        <section className="mt-8 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
          <Stats></Stats>
        </section>

        <section className="py-12 md:py-30 bg-[#F9FAFC]">
          <GetStarted></GetStarted>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
