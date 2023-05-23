import type { GatsbyConfig } from "gatsby";
import path from "path";
import SiteMetadata from "./site_metadata";

const config: GatsbyConfig = {
  siteMetadata: SiteMetadata,
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locale`,
        path: path.join(__dirname, `content`, `locales`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `content`, `images`),
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-emotion",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-plugin-react-svg",
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        localeJsonSourceName: "locale",
        languages: ["en", "pt"],
        defaultLanguage: "en",
        siteUrl: SiteMetadata.siteUrl,
        i18nextOptions: {
          returnObjects: true,
        },
      }
    }
  ]
};

export default config;
