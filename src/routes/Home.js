import "../components/HeroStyles.css";
import "../components/DestinationStyles.css";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeImg1 from "../assets/lake1.webp";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Hero
          cName="hero"
          heroImg={HomeImg1}
          title="Mainit"
          text="A Self Contained Paradise"
        />

        <Destination />

        <Trip />
        <Footer />
      </div>
    </>
  );
}

export default Home;
