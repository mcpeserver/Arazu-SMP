export interface ServerInfo {
  ip: string;
  port: number;
  edition: string;
  version: string;
  status: string;
}

export interface Owner {
  name: string;
  whatsapp: string;
}

export interface Admin {
  name: string;
  whatsapp: string;
}

export interface OwnersInfo {
  owner: Owner;
  admins: Admin[];
}

export interface SocialInfo {
  tiktok: string;
  whatsapp_channel: string;
  whatsapp_group: string;
  discord: string;
  website: string;
}

export interface SEOInfo {
  title: string;
  description: string;
  keywords: string;
  author: string;
  canonical: string;
  themeColor: string;
  robots: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl: string;
  ogType: string;
  twitterCard: string;
}

export interface DeveloperInfo {
  name: string;
  contact: {
    phone: string;
    whatsapp: string;
  };
  community: {
    name: string;
    website: string;
    discord: string;
  };
  website: {
    portfolio: string;
  };
}
