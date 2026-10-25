import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start px-4 py-32 text-white sm:px-6">
      <p className="font-mono text-sm text-mint">404</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">This page doesn&apos;t exist.</h1>
      <Link
        href="/"
        className="mt-8 rounded-full bg-mint px-6 py-3 font-semibold text-mint-ink transition-colors hover:bg-mint-strong"
      >
        Back to the homepage
      </Link>
    </section>
  );
}
