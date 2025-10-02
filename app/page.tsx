import Container from "@/components/Container";
import CompanyCard from "@/components/CompanyCard";
import { SITE_URL, VENDORS } from "@/data/vendors";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": VENDORS.map((v, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "url": `${SITE_URL}/vendors/${v.slug}`,
      "name": v.name
    }))
  };

  return (
    <>
      <Container>
        <section className="py-12">
          <h1 className="text-3xl font-semibold text-white">
            Top 5 Cyber Incident Response Companies
          </h1>
          <p className="mt-3 max-w-3xl text-zinc-300">
            Our editorial-style ranking highlights speed to contain, global reach, telemetry & intel,
            breadth of services, and transparency. Click into each review for strengths,
            limitations and source links.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VENDORS.map((v) => (
              <CompanyCard
                key={v.slug}
                rank={v.rank}
                name={v.name}
                slug={v.slug}
                summary={v.summary}
              />
            ))}
          </div>
        </section>

        <section id="methodology" className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Methodology</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
            <li><strong>Speed to contain:</strong> target SLAs/claims, responder activation, remote deployment.</li>
            <li><strong>Global reach:</strong> 24×7 coverage, follow-the-sun ability.</li>
            <li><strong>Telemetry & intel:</strong> platform visibility and threat intelligence.</li>
            <li><strong>Breadth:</strong> crisis comms, forensics, remediation, legal support.</li>
            <li><strong>Transparency:</strong> public documentation, retainer terms, references.</li>
          </ul>
          <p className="mt-3 text-xs text-zinc-400">
            Rankings reflect an editorial viewpoint. Always validate fit for your organization, scope, and region.
          </p>
        </section>

        <section id="about" className="mt-10 text-sm text-zinc-400">
          <p>
            This site references publicly available materials and vendor statements (noted on each page).
            Last verification date is shown per vendor.
          </p>
        </section>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}