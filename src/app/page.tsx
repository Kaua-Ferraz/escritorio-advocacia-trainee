import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import Reviews from "@/components/Reviews/Reviews";
import About from "@/components/About";
import Team from "@/components/Team";

export default function Home() {
  return (
    // adicione os componentes na ordem aqui, é como se fosse um main / App
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Team />
        <PracticeAreas />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
