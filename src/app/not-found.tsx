import Link from "next/link";

export default function NotFound() {
  return (
    <main className="px-4 py-12 text-center">
      <h1 className="text-5xl font-bold">404</h1>

      <p className="mt-4 text-gray-600">
        Article not found.
      </p>

      <Link
        href="/news"
        className="mt-6 inline-block rounded bg-amber-600 px-4 py-2 text-white"
      >
        Back to News
      </Link>
    </main>
  );
}