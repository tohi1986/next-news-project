import Link from "next/link";
import type { Article } from "@/types/article";

type NewsCardProps = {
  article: Article;
};

export default function NewsCard({ article }: NewsCardProps) {
  return (
    <Link href={`/news/${encodeURIComponent(article.url)}`}>
      <article className="border-4 rounded-lg p-4">
        <img
          src={article.image}
          alt={article.title}
          className="h-56 w-full rounded-lg object-cover"
        />

        <h2 className="mt-4 font-bold">{article.title}</h2>

        <p>{article.source.name}</p>
      </article>
    </Link>
  );
}
