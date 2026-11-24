import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  output: "export",
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: { unoptimized: true },
  poweredByHeader: false,
  turbopack: { root: projectRoot },
};

export default withMDX(nextConfig);
