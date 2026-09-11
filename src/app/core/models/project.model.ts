export interface ProjectItem {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  fullDescription?: string;
  image: string;
  client?: string;
  year?: string;
  location?: string;
}
