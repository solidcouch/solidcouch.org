/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  // this is for deployment to github pages when there's no HOSTNAME
  basePath:
    !process.env.HOSTNAME && process.env.REPO
      ? `/${process.env.REPO}`
      : undefined,
};

export default nextConfig;
