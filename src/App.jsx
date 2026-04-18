import "./App.css";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Ready from "./components/readyTransform/Ready";
import GetStarted from "./components/starter/GetStarted";
import TransparentPricing from "./components/simplePricing/TransparentPricing";
import Stats from "./components/stats/Stats";
import PremiumPricing from "./components/premiumPricing/PremiumPricing";

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

        <section className="py-12 md:py-30 bg-white">
          <PremiumPricing></PremiumPricing>
        </section>

        <section className="py-12 md:py-30 bg-[#F9FAFC]">
          <GetStarted></GetStarted>
        </section>

        <section className="py-12 md:py-30 bg-white">
          <TransparentPricing></TransparentPricing>
        </section>

        <section className="py-12 md:py-30 p-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
          <Ready></Ready>
        </section>
      </main>
      <footer className="p-4 lg:p-0 bg-[#101727]">
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
