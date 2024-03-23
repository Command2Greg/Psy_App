export type AppDataState = {
  psyhologists: any[];
  question: Question;
};

export type StoreState = {
  appData: AppDataState;
};

export type Answer = {
  id: string;
  title: string;
  text: string;
  likes: string[];
};

export type Comment = {
  content: string;
  date: Date;
  likes: string[];
  slug: string;
};

export type Question = {
  slug: string;
  title: string;
  answers: Answer[];
  comments: Comment[];
  video: string[];
  SEODesc: string;
  SEOTitle: string;
  canonical: string;
};
