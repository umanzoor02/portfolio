import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-start py-32">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">This page doesn&apos;t exist.</h1>
      <Link href="/" className="mt-6 text-accent underline-offset-4 hover:underline">
        Back to the homepage
      </Link>
    </section>
  );
}
