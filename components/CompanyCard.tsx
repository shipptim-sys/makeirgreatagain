import Link from "next/link";
import Pill from "./Pill";

export default function CompanyCard({
  rank,
  name,
  slug,
  summary
}: {
  rank: number;
  name: string;
  slug: string;
  summary: string;
}) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg transition hover:border-brand-400/40 hover:bg-white/10">
      <div className="flex items-center justify-between">
        <Pill>#{rank}</Pill>
        <Link
          href={`/vendors/${slug}`}
          className="rounded-xl bg-brand-500/20 px-3 py-1 text-xs text-brand-200 ring-1 ring-inset ring-brand-500/30 hover:bg-brand-500/30"
        >
          Read review
        </Link>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-white">{name}</h3>
      <p className="mt-2 line-clamp-3 text-sm text-zinc-300">{summary}</p>
    </article>
  );
}