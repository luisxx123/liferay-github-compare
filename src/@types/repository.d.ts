interface IRepository {
  id: number;
  full_name: string;
  stargazers_count: number;
  forks: number;
  open_issues: number;
  created_at: string;
  pushed_at: string;
  license: ILicense | null;
  starred?: boolean;
  language: string;
  data?: object;
}

interface ILicense {
  key: string;
  name: string;
  spdx_id: string;
  url: null;
  node_id: string;
}

interface IRepositoryList {
  items: IRepository[];
}

interface RepositoryContext {
  repositories: Repository[];
  setRepositories: (repository?: Repository) => void;
  urlEnding: string;
  setUrlEnding: (url: string) => void;
  addRepository: (repository?: Repository) => void;
  addAllUserRepositories: (repository?: Repository) => void;
}

interface repositoryCard {
  id: number;
  key: number;
  name: string;
  stars: number;
  forks: number;
  openIssues: number;
  createdAt: string;
  pushedAt: string;
  license: string;
  language: string;
}
