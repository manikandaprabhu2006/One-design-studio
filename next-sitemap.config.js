/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://onedesignstudio.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api"],
      },
    ],
  },
  exclude: ["/admin/*", "/api/*"],
  changefreq: "weekly",
  priority: 0.7,
};
