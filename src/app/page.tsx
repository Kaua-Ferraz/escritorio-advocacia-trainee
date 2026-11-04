import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import PracticeAreas from "@/components/PracticeAreas/PracticeAreas";
import Reviews from "@/components/Reviews/Reviews";
import Location from "@/components/Location/Location";
import About from "@/components/About";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Team />
        <PracticeAreas />
        <Reviews />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
