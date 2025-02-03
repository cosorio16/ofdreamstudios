import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
