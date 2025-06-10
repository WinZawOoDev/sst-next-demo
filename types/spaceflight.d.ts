
interface SpaceFlightResponse {
    count: number;
    next: string;
    previous: string;
    results: SpaceArticle[]
}


interface Socials {
  x: string;
  youtube: string;
  instagram: string;
  linkedin: string;
  mastodon: string;
  bluesky: string;
}

interface SpaceArticleAuthor {
  name: string;
  socials: Socials;
}

interface SpaceArticle {
    id: number;
    title: string;
    authors: SpaceArticleAuthor[];
    url: string;
    image_url: string;
    news_site: string;
    summary: string;
    published_at: string;
    updated_at: string;
    featured: boolean;
    launches: any[]; // The structure of launch objects is unknown
    events: any[];   // The structure of event objects is unknown
}