import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="
    bg-background
    flex min-h-screen items-center justify-center px-4">
      <section className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold text-amber-500">
          Stay Updated With The Latest News
        </h1>

        <p className="mt-6 text-lg text-amber-800">
          <span className="text-amber-300">Next News</span> brings you the
          latest stories from around the world. Discover technology, business,
          science, and global events all in one place.
        </p>

        <Link
          href="/news"
          className="mt-8 inline-block rounded-md bg-amber-800 px-6 py-3 font-bold text-black transition hover:bg-amber-700"
        >
          Explore News
        </Link>
      </section>
    </main>
  );
}