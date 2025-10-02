import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-2 py-8 text-xs text-zinc-400 sm:flex-row">
          <p>© {new Date().getFullYear()} example.com — All rights reserved.</p>
          <p>Last updated {new Date().toISOString().slice(0,10)}</p>
        </div>
      </Container>
    </footer>
  );
}