import type { NextConfig } from "next";

// Static export for GitHub Pages. The site is served from
// https://<owner>.github.io/<repo>/, so every asset/link needs that
// repo-name prefix baked in at build time.
const repoName = "letter-to-shakey";

const nextConfig: NextConfig = {
  agentRules: false,
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  trailingSlash: true,
};

export default nextConfig;
