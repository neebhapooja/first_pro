import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-[#dfe9e0]">

      <div className="mx-auto grid min-h-[720px] max-w-[1600px] grid-cols-1 lg:grid-cols-2">

        <div className="flex items-center px-6 py-20 sm:px-12 lg:px-20">

          <div className="max-w-xl">

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em]">
              Smart outdoor technology
            </p>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Smarter technologies
              <br />
              for your home.
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-8 text-neutral-700">
              Experience a simpler, smarter way to manage
              your outdoor space with connected technology.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                href="/collections/all"
                className="rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Shop now
              </Link>

              <Link
                href="/pages/about"
                className="rounded-full border border-black px-7 py-4 text-sm font-semibold transition hover:bg-black hover:text-white"
              >
                Learn more
              </Link>

            </div>

          </div>
        </div>

        <div className="relative min-h-[500px] lg:min-h-full">
          <Image
            src="/images/hero.jpg"
            alt="Smart outdoor technology"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

      </div>
    </section>
  );
}