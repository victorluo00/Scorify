// This file holds the TypeScript types that can be used in other files without importing

interface IArticle {
  id: number;
  title: string;
  body: string;
}

// type for the state object (array of articles)
type ArticleState = {
  articles: IArticle[];
};

// type for the action creators
type ArticleAction = {
  type: string;
  article: IArticle;
};

// type for the dispatch function
type DispatchType = (args: ArticleAction) => ArticleAction;
