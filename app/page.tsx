import Image from "next/image";
import Hero from "./components/hero";
import { FloatingNav } from "./components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "./components/Grid";

export default function Home() {
  return (
    <main className="bg-black-100 text-white relative flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5 ">
      <div className="max-w-7xl w-full ">
        <FloatingNav navItems={
          [{ name :'Home', link:'#none', icon:<FaHome/>}]}
        />
        <Hero/>
        <Grid/>



      </div>
    
    </main>
  );
}
