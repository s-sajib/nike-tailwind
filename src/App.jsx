import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {
  AboutUs,
  Hero,
  NewsLetter,
  Offers,
  Products,
  Reviews,
} from "./sections";
export default function App() {
  return (
    <>
      <header className="padding-x py-8 absolute z-10 w-full">
        <Navbar />
      </header>
      <main>
        <Hero />
        <Products />
        <AboutUs />
        <Offers />
        <Reviews />
        <NewsLetter />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
