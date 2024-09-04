import Grid from "../components/Grid";
import Futures from "../components/Futures";
import Hero from "../components/Hero";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="h-[350vh]">
      <Hero />
      <Futures />
      <Grid />
      <Contact />
    </main>
  );
}
