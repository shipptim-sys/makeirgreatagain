import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Pill from "@/components/Pill";
import { VENDORS } from "@/data/vendors";

export async function generateStaticParams() {
  return VENDORS.map(v => ({ slug: v.slug }));
}

export default function VendorPage({ params }: { params: { slug: string } }) {
  const vendor = VENDORS.find(v => v.slug === params.slug);
  if (!vendor) return notFound();

  return (
    <Container>
      <article className="py-10">
        <div className="flex items-center gap-3">
          <Pill>#{vendor.rank}</Pill>
          <h1 className="text-2xl font-semibold text-white">{vendor.name}</h1>
        </div>
        <p className="mt-2 text-zinc-300">{vendor.summary}</p>

        <div className="mt-6 space-y-4">
          {vendor.writeup.map((p, i) => (
            <p key={i} className="text-zinc-200">{p}</p>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <section>
            <h2 className="text-sm font-semibold text-white">Strengths</h2>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-300">
              {vendor.strengths.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </section>
          <section>
            <h2 className="text-sm font-semibold text-white">Limitations</h2>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-300">
              {vendor.limitations.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </section>
          <section>
            <h2 className="text-sm font-semibold text-white">Highlights</h2>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-300">
              {vendor.highlights.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </section>
        </div>

        <section className="mt-10">
          <h2 className="text-sm font-semibold text-white">Sources</h2>
          <ul className="mt-2 space-y-1 text-sm">
            {vendor.sources.map((s, i) => (
              <li key={i}>
                <a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-zinc-400">Last verified: {vendor.lastVerified}</p>
        </section>

        <div className="mt-10">
          <a
            href={vendor.website}
            className="inline-flex items-center rounded-xl bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-inset ring-white/15 hover:bg-white/15"
            target="_blank" rel="noopener noreferrer"
          >
            Visit Website
          </a>
        </div>
      </article>
    </Container>
  );
}