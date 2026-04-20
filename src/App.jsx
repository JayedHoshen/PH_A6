import "./App.css";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Ready from "./components/readyTransform/Ready";
import GetStarted from "./components/starter/GetStarted";
import TransparentPricing from "./components/simplePricing/TransparentPricing";
import Stats from "./components/stats/Stats";
import PremiumPricing from "./components/premiumPricing/PremiumPricing";
import { Suspense, useState } from "react";
import { LineWave } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";

const fetchProduct = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const productPromise = fetchProduct();
  const [selectedProduct, setSelectedProduct] = useState([]);
  return (
    <>
      <header className="sticky top-0 left-0 z-10">
        <Navbar cartCount={selectedProduct.length}></Navbar>
      </header>
      <main>
        <section>
          <Banner></Banner>
        </section>

        <section className="mt-8 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
          <Stats></Stats>
        </section>

        <section className="py-12 md:py-30 bg-white">
          <Suspense
            fallback={
              <LineWave
                color="#9514FA"
                wrapperStyle={{ marginLeft: "50%", marginTop: "100px" }}
              ></LineWave>
            }
          >
            <PremiumPricing
              productPromise={productPromise}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
            ></PremiumPricing>
          </Suspense>
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

        {/* Toastify */}
        <ToastContainer></ToastContainer>
      </main>
      <footer className="p-4 lg:p-0 bg-[#101727]">
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
