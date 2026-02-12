export interface Project {
  title: string;
  summary: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}
