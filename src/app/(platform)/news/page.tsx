import type { Metadata } from "next";
import { getNews } from "@/lib/news";
import NewsCard from "@/components/news/NewsCard";

export const metadata: Metadata = {
  title: "News | Next News",
  description: "Latest news from around the world.",
};

export default async function NewsPage() {
  const data = await getNews();

  return (
    <main className="px-4 py-12">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-amber-600 pb-16">
          Latest News:
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
          {data.articles.map((article, index) => (
            <NewsCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
