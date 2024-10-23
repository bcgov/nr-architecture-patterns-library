import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "NRM Architecture Patterns Library",
  tagline: "Architecture Patterns & Guidance for the Natural Resource Sector",
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

  plugins: [
    [
      require.resolve("docusaurus-lunr-search"),
      {
        enableHighlight: true,
      },
    ],
    "@docusaurus/theme-mermaid",
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/bcgov/nr-architecture-patterns-library/tree/main/patterns/",
        },
        blog: false,
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
    image: "img/BCID_H_rgb_pos.png",
    // announcementBar: {
    //   id: "announcement",
    //   content: "Lorem ipsum dolor sit amet",
    //   backgroundColor: "#FEF1D8",
    //   textColor: "#000000",
    //   isCloseable: true,
    // },
    navbar: {
      hideOnScroll: false,
      title: "NRM Architecture Patterns Library",
      logo: {
        alt: "Government of B.C.",
        src: "img/BCID_H_rgb_pos.png",
        srcDark: "img/BCID_H_rgb_rev.png",
      },
      items: [
        // Uncomment if/when versioning is enabled
        // {
        //   type: "docsVersionDropdown",
        //   position: "left",
        //   // dropdownItemsAfter: [{ to: "/versions", label: "All versions" }],
        //   dropdownActiveClassDisabled: true,
        // },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "right",
          label: "Patterns",
        },
        {
          href: "https://github.com/bcgov/nr-architecture-patterns-library",
          position: "right",
          className: "header-github-logo",
          "aria-label": "GitHub Repo",
        },
      ],
    },
    footer: {
      links: [
        {
          label: "Home",
          href: "https://www2.gov.bc.ca/gov/content/home",
        },
        {
          label: "About gov.bc.ca",
          href: "https://www2.gov.bc.ca/gov/content/about-gov-bc-ca",
        },
        {
          label: "Disclaimer",
          href: "https://www2.gov.bc.ca/gov/content/home/disclaimer",
        },
        {
          label: "Privacy",
          href: "https://www2.gov.bc.ca/gov/content/home/privacy",
        },
        {
          label: "Accessibility",
          href: "https://www2.gov.bc.ca/gov/content/home/accessible-government",
        },
        {
          label: "Copyright",
          href: "https://www2.gov.bc.ca/gov/content/home/copyright",
        },
        {
          label: "Contact us",
          href: "https://www2.gov.bc.ca/gov/content/home/get-help-with-government-services",
        }
      ],
      copyright: `© ${new Date().getFullYear()} Government of British Columbia. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["mermaid"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
