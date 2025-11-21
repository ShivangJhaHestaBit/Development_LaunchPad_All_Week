import { Particles } from "@/components/ui/particles";
import Hero from "../components/Landing/Hero";
export default function Home() {
  return (
    <>
      <Particles
        className="absolute inset-0 z-0"
        quantity={400}
        ease={10}
        color="#000000"
        refresh
      />
      <Hero />
    </>
  );
}
