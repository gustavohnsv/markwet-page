export type CategoryId = "getting-started" | "account" | "troubleshooting";

export interface ArticleData {
  slug: string;
  titleKey: string;
  category: CategoryId;
}

export const HELP_ARTICLES: ArticleData[] = [
  {
    slug: "invite-friends",
    titleKey: "help.articles.invite-friends.title",
    category: "getting-started",
  },
  {
    slug: "android-sync",
    titleKey: "help.articles.android-sync.title",
    category: "troubleshooting",
  },
  {
    slug: "is-it-free",
    titleKey: "help.articles.is-it-free.title",
    category: "getting-started",
  },
  {
    slug: "delete-account",
    titleKey: "help.articles.delete-account.title",
    category: "account",
  },
];
