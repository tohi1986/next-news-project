import Image from "next/image";
import { getArticleById } from "@/lib/news";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};


export default async function NewsDetailPage({ params }: PageProps) {
  const { id } = await params;

  const article = await getArticleById(id);


  return (
    <main className="px-4 py-12">
      <article className="mx-auto max-w-4xl">

       {article.image && (
  <Image
    src={article.image}
    alt={article.title}
    width={900}
    height={500}
    className="w-full rounded-xl object-cover"
  />
)}


        <h1 className="mt-8 text-4xl font-bold">
          {article.title}
        </h1>


        <p className="mt-3 text-gray-500">
          {article.source.name}
        </p>


        <p className="mt-6 text-xl">
          {article.description}
        </p>


        <p className="mt-8 leading-8">
          {article.content}
        </p>

      </article>
    </main>
  );
}