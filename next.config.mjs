/** @type {import('next').NextConfig} */
const path = await import('path');
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const nextConfig = {
    sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

export default nextConfig;
