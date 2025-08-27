export interface projectCard {
  title: string;
  description: string;
  details: string;
  repo: string;
  website?: string;
  imageUrl: string;
  // isMobile: boolean;
  // technologies: string[]; --- IGNORE ---
}

export interface programmingLanguages {
  name: string;
  icon: string;
}

export interface appRoutes {
  name: string,
  route: string
}
