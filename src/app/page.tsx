import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import Reviews from "@/components/Reviews/Reviews";

export default function Home() {
  return (
    // adicione os componentes na ordem aqui, é como se fosse um main / App
    <>
      <Header />
      <main>
        <Hero />
        <PracticeAreas />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
