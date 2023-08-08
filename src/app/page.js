import Hero from "./components/Hero";
import Ingredients from "./components/Ingredients";
import MooalaDifference from "./components/MooalaDifference";

export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <Ingredients />
      <MooalaDifference />
    </main>
  );
}
