import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { URL } from "url";

const withNextIntl = createNextIntlPlugin();

const apiUrl = process.env.API_BASE_URL || "";
const domain = new URL(apiUrl).hostname;

const nextConfig: NextConfig = {
  images: {
    domains: [domain],
  },
  experimental: {
    optimizePackageImports: [],
  },
};

export default withNextIntl(nextConfig);
