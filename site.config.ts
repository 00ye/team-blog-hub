export const config = {
  siteMeta: {
    title: "HackTB Team Blog Hub",
    teamName: "HackTB.",
    description: "RSS based blog starter kit for Dgut teams.",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://team-blog-hub.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Company",
      href: "https://dgut.edu.cn",
    },
    {
      title: "HackTB",
      href: "https://hacktb.com/",
    },
  ],
};
