import Header from "@/components/Header";
import { getPage } from "@/lib/shopify";
import { notFound } from "next/navigation";

export default async function AboutPage() {
  const page = await getPage("about-us");

  if (!page) {
    notFound();
  }

  return (
    <main>
      <h1>{page.title}</h1>

      <div
        dangerouslySetInnerHTML={{
          __html: page.body,
        }}
      />
    </main>
  );
}