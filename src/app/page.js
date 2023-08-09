import Hero from "./components/Hero";
import Ingredients from "./components/Ingredients";
import MooalaDifference from "./components/MooalaDifference";
import Supporters from "./components/Supporters";

export default function Home() {
  return (
    <main className="pt-20 w-full">
      <Hero />
      <Ingredients />
      <MooalaDifference />
      <Supporters />
    </main>
  );
}
