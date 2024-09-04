/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "https://abc-wavynote.koyeb.app/wavynote/v1.0/:path*",
            },
        ];
    },
};
export default nextConfig;
