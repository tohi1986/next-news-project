import Image from "next/image";
import ModalNewsComponent from "@/components/news/ModalNewsComponent";
import { getArticleById } from "@/lib/news";

export default async function NewsModalPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;

  const article = await getArticleById(id);

  if (!article) {
    return null;
  }

  return (
    <ModalNewsComponent>
      <article>

        {article.image && (
          <Image
            src={article.image}
            alt={article.title}
            width={800}
            height={450}
            className="rounded-lg"
          />
        )}

        <h1 className="mt-4 text-amber-500 text-3xl font-bold">
          {article.title}
        </h1>

        <p className="mt-3 text-amber-500">
          {article.description}
        </p>

        <p className="mt-3 text-sm text-black">
          {article.source.name}
        </p>

      </article>
    </ModalNewsComponent>
  );
}