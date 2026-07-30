import type { Article, NewsResponse } from "@/types/article";

const API_KEY = process.env.NEWS_API_KEY;

export async function getNews(): Promise<NewsResponse> {
  const res = await fetch(
    `https://gnews.io/api/v4/top-headlines?category=technology&lang=en&apikey=${API_KEY}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  return res.json();
}

export async function getArticleById(id: string): Promise<Article> {
  const data = await getNews();

  return data.articles[Number(id)];
}




export async function getArchiveNews(): Promise<NewsResponse> {
  const res = await fetch(
    `https://gnews.io/api/v4/search?q=technology&apikey=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch archive news");
  }

  return res.json();
}


export async function getTrendingNews(): Promise<NewsResponse> {
  const res = await fetch(
    `https://gnews.io/api/v4/top-headlines?category=technology&lang=en&apikey=${API_KEY}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch trending news");
  }

  return res.json();
}