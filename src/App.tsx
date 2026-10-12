import Header from "./components/Header";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Gallery from "./components/Gallery";
import { Services, Process } from "./components/ServicesProcess";
import { Why, ServiceAreas, FinalCta } from "./components/WhyAreasCta";
import { Contact, Footer } from "./components/ContactFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-ivory font-sans text-midnight antialiased">
      <Header />
      <main>
        <Hero />
        <Introduction />
        <Gallery />
        <Services />
        <Process />
        <Why />
        <ServiceAreas />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
