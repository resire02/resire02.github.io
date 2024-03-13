/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'out',
    typescript: {
        ignoreBuildErrors: false
    }
};

export default nextConfig;
