import NewsCard from "@/components/news/NewsCard";
import { getArchiveNews } from "@/lib/news";

export default async function Archive() {
  const data = await getArchiveNews();

  return (
    <section className="bg-amber-600 text-black">
      <h2 className="text-3xl font-bold mb-6 text-black ">
        📚 Archive
      </h2>

      <div className="flex flex-col gap-10 bg-amber-600 text-black">
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