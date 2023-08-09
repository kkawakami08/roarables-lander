import Hero from "./components/homepage/Hero";
import Ingredients from "./components/homepage/Ingredients";
import MooalaDifference from "./components/homepage/MooalaDifference";
import Supporters from "./components/homepage/Supporters";
import Posts from "./components/homepage/Posts";

export default function Home() {
  return (
    <main className="pt-20 w-full">
      <Hero />
      <Ingredients />
      <MooalaDifference />
      <Supporters />
      <Posts />
    </main>
  );
}
