import { User, Project, GalleryImage, Testimonial, Service, FAQ, ContactSubmission } from "@prisma/client";

export type { User, Project, GalleryImage, Testimonial, Service, FAQ, ContactSubmission };

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    instagram: string;
    linkedin: string;
  };
}

export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export interface Statistic {
  id: number;
  value: string;
  label: string;
  suffix?: string;
}

export interface ProcessStep {
  id: number;
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
}
