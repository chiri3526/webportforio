export type ProjectFilter = "all" | string;
export type Category = ProjectFilter;

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: Exclude<Category, "all">;
  image: string;
  url: string;
  featured: boolean;
};

export type Skill = {
  id: string;
  name: string;
  icon: "code" | "server" | "database" | "cloud" | "spark" | "layout";
};
