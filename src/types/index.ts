import type { ReactNode } from "react";
import type { IconType } from "react-icons";

export type formField = Record<"name" | "value", string>;
export type experience = {
  company: string;
  role: string;
  duration: string;
  description: string[];
};

export type skill = {
  name: string;
  imagePath: string;
};

export type bio = {
  name: string;
  title: string;
  description: string;
};

export type theme = "light" | "dark";

export interface ThemeClassSet {
  bgPrimaryAccent: string;
  bgSecondaryAccent: string;
  bgPrimary: string;
  bgSecondary: string;
  bgTertiary: string;
  textPrimary: string;
  textSecondary: string;
  textMainAccent1: string;
  textMainAccent2: string;
  textMainAccent3: string;
  borderSecondary: string;
  headerGradient: string;
}

export interface hero {
  title: string | TrustedHTML;
  punchLine: string | ReactNode;
  shortDescription: string | ReactNode;
  longDescription: string | TrustedHTML;
}

export interface education {
  title: string;
  subTitle: string;
}

export interface pageProp {
  theme: theme;
}

export const cardGenres = {
  ARTICLE: "article",
  TESTIMONIALS: "testimonials",
  PHOTOGRAPHY: "photography",
  EXPERIENCE: "experience",
  INSPIRATIONS: "inspirations",
  WORKS: "works",
  AWARDS: "awards",
  COLLABORATE: "collaborate",
};
export const spotlight: Record<keyof typeof cardGenres, string> = {
  ARTICLE: "rgba(120,100,255,0.45)", //indigo
  TESTIMONIALS: "rgba(80,160,255,0.45)", //blue
  PHOTOGRAPHY: "rgba(245, 158, 11, 0.45)", //amber
  EXPERIENCE: "rgba(56, 189, 248, 0.45)", //sky
  INSPIRATIONS: "rgba(16, 185, 129, 0.45)", //emerald
  WORKS: "rgba(34, 211, 238, 0.45)", // cyan,
  AWARDS: "rgba(255, 255, 255, 0.45)", //white
  COLLABORATE: "rgba(250, 204, 21, 0.45)", //golden,
};

export interface testimonial {
  name: string;
  testimonial: string;
  jobTitle: string;
  location: string;
  company: string;
  image?: string;
}

export type highlightType = "award" | "highlight";

export type achievement = {
  title: string;
  subTitle: string;
  year: string;
  icon: IconType;
  type: highlightType;
  company: string;
};

export type Album = {
  img: string;
  title: string;
  orientation?: "portrait" | "landscape";
  description?: string;
};

export type prcocessedimages = {
  title: string;
  thumb: string;
  medium: string;
  full: string;
  orientation?: "portrait" | "landscape";
  description?: string;
};

export interface roleModels {
  name: string;
  title: string;
  description: string;
  image: string;
}
