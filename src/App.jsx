import "./app.css";
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
      <nav>
        <Navbar />
      </nav>
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
