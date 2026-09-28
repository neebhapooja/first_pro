import Header from "@/components/Header";   
import Hero from "@/components/Hero";   
export default async function HomePage() {

 
  return (
    <>     

      <Header />
    <Hero /> 
      <main>

 
 
        <section className="px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.2em]">
              Built differently
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              A smarter way to experience your home.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-neutral-600">
              Powerful products. Beautiful design.
              Intelligent technology.
            </p>

          </div>
        </section>

      </main>
    </>
  );
}