import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output:"export",basePath:"/_dev_Apple_AppliedAIEngineer",assetPrefix:"/_dev_Apple_AppliedAIEngineer/",trailingSlash:true,images:{unoptimized:true},turbopack:{root:process.cwd()}
};

export default nextConfig;
