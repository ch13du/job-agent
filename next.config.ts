import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Preserve the project's existing AGENTS.md when the dev server starts.
  agentRules: false,
};

export default nextConfig;
