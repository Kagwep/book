import { defineConfig } from "vocs";

export default defineConfig({
  banner: "Join the [Discord](https://discord.gg/dojoengine)!",
  title: "Dojo Book",
  iconUrl: "/dojo-mark-full-dark.svg",
  logoUrl: "/dojo-mark-full-dark.svg",
  socials: [
    {
      icon: "github",

      link: "https://github.com/dojoengine/dojo",
    },
    {
      icon: "x",

      link: "https://twitter.com/ohayo_dojo",
    },
  ],
  editLink: {
    pattern:
      "https://github.com/dojoengine/book/blob/main/dojo-book/docs/pages/:path",
    text: "Edit on GitHub",
  },
  ogImageUrl:
    "https://vocs.dev/api/og?logo=%logo&title=%title&description=%description",
  description: "Dojo | The Provable Game Engine",
  topNav: [
    { text: "Dojo", link: "/getting-started", match: "/docs" },
    { text: "Katana", link: "/toolchain/katana/overview", match: "/katana" },
    { text: "Blog", link: "https://www.dojoengine.org/en/articles" },
    {
      text: "0.5.0",
      items: [
        {
          text: "Releases",
          link: "https://github.com/dojoengine/dojo/releases",
        },
        {
          text: "Changelog",
          link: "https://github.com/dojoengine/dojo/releases",
        },
        {
          text: "Contributing",
          link: "https://github.com/dojoengine/dojo/blob/main/CONTRIBUTING.md",
        },
      ],
    },
  ],
  font: {
    google: "Poppins",
  },
  theme: {
    variables: {
      color: {
        textAccent: {
          light: "#071E3F",
          dark: "#A7C9F8",
        },
        background: {
          light: "white",
          dark: "#212121",
        },
      },
      content: {
        horizontalPadding: "40px",
        verticalPadding: "80px",
      },
    },
  },
  sidebar: [
    {
      text: "Overview",
      collapsed: true,
      items: [
        { text: "What is Dojo?", link: "/getting-started" },
        { text: "Why Dojo?", link: "/theory/what-is-dojo" },
        { text: "Provable Games & Worlds", link: "/theory/autonomous-worlds" },
        { text: "What is Cairo?", link: "/theory/cairo" },
        { text: "FAQs", link: "/theory/faqs" },
        {
          text: "Community",
          link: "/community/get-started",
        },
      ],
    },
    {
      text: "Getting Started",
      collapsed: true,
      items: [
        { text: "Quick Start", link: "/getting-started/quick-start" },
        { text: "Manual Install", link: "/getting-started/from-source" },
        { text: "Development Setup", link: "/getting-started/setup" },
      ],
    },
    {
      text: "Tutorials",
      collapsed: true,
      items: [
        { text: "ECS in 15 minutes", link: "/cairo/hello-dojo" },
        {
          text: "Onchain Chess",
          link: "/tutorial/onchain-chess/README",
          items: [
            { text: "0. Setup", link: "/tutorial/onchain-chess/0-setup" },
            { text: "1. Initiate", link: "/tutorial/onchain-chess/1-action" },
            { text: "2. Move", link: "/tutorial/onchain-chess/2-move" },
            { text: "3. Test Chess", link: "/tutorial/onchain-chess/3-test" },
          ],
        },
        {
          text: "Deploy using Slot",
          link: "/tutorial/deploy-using-slot/main",
        },
      ],
    },
    {
      text: "Reference",
      collapsed: true,
      items: [
        {
          text: "Core Architecture",
          collapsed: true,
          items: [
            { text: "Overview", link: "/cairo/overview" },
            { text: "World", link: "/cairo/world" },
            { text: "Systems", link: "/cairo/systems" },
            { text: "Models", link: "/cairo/models" },
            { text: "Commands", link: "/cairo/commands" },
            { text: "Config", link: "/cairo/config" },
            { text: "Events", link: "/cairo/events" },
            { text: "Authorization", link: "/cairo/authorization" },
            { text: "Metadata", link: "/cairo/metadata" },
            { text: "Enum", link: "/cairo/enum" },
            { text: "Entities", link: "/cairo/entities" },
            { text: "Testing", link: "/cairo/testing" },
          ],
        },
        {
          text: "Toolchain",
          collapsed: true,
          items: [
            { text: "Dojoup", link: "/toolchain/dojoup" },
            {
              text: "Sozo",
              collapsed: true,
              link: "/toolchain/sozo/overview",
              items: [
                { text: "Reference", link: "/toolchain/sozo/reference" },
                {
                  text: "profile",
                  link: "/toolchain/sozo/common-options/profile",
                },
                {
                  text: "offline",
                  link: "/toolchain/sozo/common-options/offline",
                },
                { text: "init", link: "/toolchain/sozo/project-commands/init" },
                {
                  text: "build",
                  link: "/toolchain/sozo/project-commands/build",
                },
                { text: "test", link: "/toolchain/sozo/project-commands/test" },
                {
                  text: "migrate",
                  link: "/toolchain/sozo/project-commands/migrate",
                },
                {
                  text: "execute",
                  link: "/toolchain/sozo/world-commands/execute",
                },
                {
                  text: "register",
                  link: "/toolchain/sozo/world-commands/register",
                },
                {
                  text: "system",
                  link: "/toolchain/sozo/world-commands/system",
                },
                { text: "model", link: "/toolchain/sozo/world-commands/model" },
                {
                  text: "events",
                  link: "/toolchain/sozo/world-commands/events",
                },
                { text: "auth", link: "/toolchain/sozo/world-commands/auth" },
              ],
            },
            {
              text: "Katana",
              link: "/toolchain/katana/overview",
              items: [
                { text: "Reference", link: "/toolchain/katana/reference" },
              ],
            },
            {
              text: "Torii",
              link: "/toolchain/torii/overview",
              items: [
                { text: "Reference", link: "/toolchain/torii/reference" },
                { text: "Graphql", link: "/toolchain/torii/graphql" },
                { text: "gRPC", link: "/toolchain/torii/grpc" },
              ],
            },
            {
              text: "Slot",
              link: "/toolchain/slot/overview",
              items: [
                { text: "Reference", link: "/toolchain/slot/reference" },
                {
                  text: "Deployments",
                  link: "/toolchain/slot/deployments-commands/deployments",
                },
              ],
            },
          ],
        },
        {
          text: "SDKs",
          collapsed: true,
          items: [
            { text: "dojo.js", link: "/client/dojojs" },
            {
              text: "dojo.unity",
              link: "/client/sdk/unity/overview",
              collapsed: true,
              items: [
                {
                  text: "Dojo unity concepts",
                  link: "/client/sdk/unity/importantConcepts",
                },
                { text: "Example", link: "/client/sdk/unity/example" },
              ],
            },
            { text: "dojo.c", link: "/client/sdk/c" },
          ],
        },
        {
          text: "Deploying",
          collapsed: true,
          items: [
            { text: "Locally", link: "/deployment/locally" },
            { text: "Remote", link: "/deployment/remote" },
          ],
        },
        { text: "Utilities", link: "/cairo/origami" },
      ],
    },

    {
      text: "Contributors",
      link: "/misc/contributors",
    },
  ],
  sponsors: [
    {
      name: "Built in collaboration with",
      height: 60,
      items: [
        [
          {
            name: "Cartridge",
            link: "https://cartridge.gg/",
            image: "/Cartridge.svg",
          },
        ],
        [
          {
            name: "Starkware",
            link: "https://starkware.co/",
            image: "/Starkware.svg",
          },
          {
            name: "Starknet",
            link: "https://starknet.io/",
            image: "/Starknet.svg",
          },
        ],
      ],
    },
    {
      name: "Powering Worlds",
      height: 60,
      items: [
        [
          {
            name: "Realms World",
            link: "https://realms.world",
            image: "/RealmsWorld.svg",
          },
          {
            name: "Dope World",
            link: "https://dopewars.xyz/",
            image: "/Dope.svg",
          },
        ],
      ],
    },
  ],
});
