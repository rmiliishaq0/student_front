import Backgound from "@/components/ui/background";
import Nav from "@/components/ui/nav";
import Hero from "@/components/ui/hero"
export default function Home(){
  return(
    <main className="mx-12 my-6 overflow-hidden! min-h-lvh">
      <section>
        <Nav/>
      </section>
      <section>
        <Hero/>
      </section>  
      <Backgound/>
    </main>
  
  )
}