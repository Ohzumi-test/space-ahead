import { createClient } from 'microcms-js-sdk';

// microCMSクライアントの作成
export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// ブログ記事の型定義
export type BlogPost = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  description: string;
  content: string;
  author?: string;
  image?: {
    url: string;
    height: number;
    width: number;
    alt?: string;
  };
  tags?: Tag[];
  category?: Category;
  draft?: boolean;
};

// カテゴリの型定義
export type Category = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  slug?: string;
  description?: string;
};

// タグの型定義
export type Tag = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  slug?: string;
};

// microCMSのレスポンス型
export type MicroCMSListResponse<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};

// ブログ記事一覧を取得
export const getBlogPosts = async (queries?: {
  limit?: number;
  offset?: number;
  orders?: string;
  q?: string;
  fields?: string;
  ids?: string;
  filters?: string;
}): Promise<MicroCMSListResponse<BlogPost>> => {
  return await client.get({
    endpoint: 'blogs',
    queries,
  });
};

// 特定のブログ記事を取得
export const getBlogPost = async (contentId: string, queries?: {
  fields?: string;
  draftKey?: string;
}): Promise<BlogPost> => {
  return await client.get({
    endpoint: 'blogs',
    contentId,
    queries,
  });
};

// カテゴリ一覧を取得
export const getCategories = async (queries?: {
  limit?: number;
  offset?: number;
  orders?: string;
  q?: string;
  fields?: string;
  ids?: string;
  filters?: string;
}): Promise<MicroCMSListResponse<Category>> => {
  return await client.get({
    endpoint: 'categories',
    queries,
  });
};

// 特定のカテゴリを取得
export const getCategory = async (contentId: string, queries?: {
  fields?: string;
  draftKey?: string;
}): Promise<Category> => {
  return await client.get({
    endpoint: 'categories',
    contentId,
    queries,
  });
};

// タグ一覧を取得
export const getTags = async (queries?: {
  limit?: number;
  offset?: number;
  orders?: string;
  q?: string;
  fields?: string;
  ids?: string;
  filters?: string;
}): Promise<MicroCMSListResponse<Tag>> => {
  return await client.get({
    endpoint: 'tags',
    queries,
  });
};

// 特定のタグを取得
export const getTag = async (contentId: string, queries?: {
  fields?: string;
  draftKey?: string;
}): Promise<Tag> => {
  return await client.get({
    endpoint: 'tags',
    contentId,
    queries,
  });
};