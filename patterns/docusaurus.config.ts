import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "NRM Architecture Patterns Library",
  tagline:
    "Architecture Patterns & Guidance for the Natural Resource Sector",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://bcgov.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.BASE_URL || "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "bcgov", // Usually your GitHub org/user name.
  projectName: "nr-architecture-patterns-library", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: ["docusaurus-lunr-search","@docusaurus/theme-mermaid"],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  markdown: {
    mermaid: true,
  },

  themeConfig: {
    // Replace with your project's social card
    image: "img/gov-bc-logo-horiz.png",
    navbar: {
      title: "NRM Architecture Patterns Library",
      logo: {
        alt: "BCGov Logo",
        src: "img/gov-bc-logo-horiz.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Patterns",
        },
        {
          type: "search",
          position: "right", // this can be 'left' or 'right'
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.developer.gov.bc.ca/",
            },
            {
              label: "Rocket.Chat",
              href: "https://chat.developer.gov.bc.ca/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BCGov. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["mermaid"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
