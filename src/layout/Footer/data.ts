import { facebook, instagram, twitter } from "@/assets";

interface linkItem {
  link?: string;
  path: string;
  icon?: string;
  social?: string;
}

export const aboutLinks: linkItem[] = [
  {
    link: "How it works",
    path: "#",
  },
  {
    link: "Featured",
    path: "#",
  },
  {
    link: "Partnership",
    path: "#",
  },
  {
    link: "Business Relation",
    path: "#",
  },
];

export const communityLinks: linkItem[] = [
  {
    link: "Events",
    path: "#",
  },
  {
    link: "Blog",
    path: "/insight",
  },
  {
    link: "Podcast",
    path: "#",
  },
  {
    link: "Invite a friend",
    path: "#",
  },
];
export const socialLinks: linkItem[] = [
  { icon: instagram, social: "Instagram", path: "#" },
  { icon: twitter, social: "Twitter", path: "#" },
  { icon: facebook, social: "Facebook", path: "#" },
];
