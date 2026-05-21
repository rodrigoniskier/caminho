export type SectionType = "text" | "flip-cards" | "grid" | "list";

export interface VerseRef {
  text: string;
  reference: string;
}

export interface FlipCardData {
  title: string;
  frontSubtitle?: string;
  frontText: string;
  backText: string;
  frontLabel?: string;
  backLabel?: string;
}

export interface GridItemData {
  title: string;
  subtitle?: string;
  description: string;
}

export interface SectionData {
  id: string;
  title?: string;
  type: SectionType;
  content?: string | string[];
  verses?: VerseRef[];
  flipCards?: FlipCardData[];
  gridItems?: GridItemData[];
}

export interface Chapter {
  id: string;
  number?: number | string;
  title: string;
  subtitle?: string;
  sections: SectionData[];
}

export interface Book {
  title: string;
  subtitle: string;
  author: string;
  chapters: Chapter[];
}
