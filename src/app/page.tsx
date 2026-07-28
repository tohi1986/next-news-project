import Link from "next/link";


export default function Home() {
  return (
    <main className="px-4 py-12 text-amber-500">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-5xl font-bold">
          Stay Updated With The Latest News
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-amber-800">
          <span className="text-amber-300">Next News</span> brings you the latest stories from around the world.
          Discover technology, business, science, and global events all in one
          place.
        </p>

        <Link
          href="/news"
          className="mt-8 inline-block rounded-md  bg-amber-800 px-6 py-3 text-black font-bold"
        >
          Explore News
        </Link>
      </section>
    </main>
  );
}
