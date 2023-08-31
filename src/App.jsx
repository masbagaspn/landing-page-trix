import Banner from "./components/sections/Banner";
import Banner2 from "./components/sections/Banner2";
import Cases from "./components/sections/Cases";
import Copy1 from "./components/sections/Copy1";
import Copy2 from "./components/sections/Copy2";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Lanyard from "./components/sections/Lanyard";
import Offers from "./components/sections/Offers";
import Partners from "./components/sections/Partners";
import Prices from "./components/sections/Prices";
import Services from "./components/sections/Services";
import Testimonies from "./components/sections/Testimonies";

function App() {
  return (
    <main className="w-screen h-screen font-montserrat">
      <Hero />
      <Offers />
      <Partners />
      <Banner />
      <Copy1 />
      <Services />
      <Prices />
      <Cases />
      <Testimonies />
      <Banner2 />
      <Copy2 />
      <Lanyard />
      <Footer />
    </main>
  );
}

export default App;
