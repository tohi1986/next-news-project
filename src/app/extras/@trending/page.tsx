import NewsCard from "@/components/news/NewsCard";
import { getTrendingNews } from "@/lib/news";

export default async function Trending() {
  const data = await getTrendingNews();

  return (
    <section className="mb-12 ">
      <h2 className="text-3xl font-bold mb-6 text-amber-500">
        🔥 Trending
      </h2>

      <div className="flex flex-col gap-10 text-amber-500">
        {data.articles.map((article) => (
          <NewsCard 
            key={article.id}
            article={article} 
            index={0}          />
        ))}
      </div>
    </section>
  );
}