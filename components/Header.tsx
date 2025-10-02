"use client";
import Link from "next/link";
import Container from "@/components/Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-md bg-black/30">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-wide">
            <span className="text-white">Top 5</span>{" "}
            <span className="text-brand-400">Incident Response</span>
          </Link>
          <nav className="hidden gap-6 sm:flex">
            <Link href="/" className="text-sm text-zinc-300 hover:text-white">Home</Link>
            <a href="#methodology" className="text-sm text-zinc-300 hover:text-white">Methodology</a>
            <a href="#about" className="text-sm text-zinc-300 hover:text-white">About</a>
          </nav>
        </div>
      </Container>
    </header>
  );
}