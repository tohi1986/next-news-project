import { Key, ReactNode } from "react";

export type Article = {
  uuid: Key | null | undefined;
  publisher: ReactNode;
  id: string;
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
};

export type NewsResponse = {
  articles: Article[];
};