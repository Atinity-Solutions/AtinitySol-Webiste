import Clients from "@/components/Clients/Clients";
import Hero from "@/components/Hero/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Clients />
        <Services />
        <Portfolio />
      </div>
    </main>
  );
}
