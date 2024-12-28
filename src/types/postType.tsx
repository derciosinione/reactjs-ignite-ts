import { AuthorType } from "./AuthorType";
import { ContentType } from "./ContentType";

export interface PostType {
    id: number;
    author: AuthorType;
    contents: ContentType[];
    publishedAt: Date;
  }