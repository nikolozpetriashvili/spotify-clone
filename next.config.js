/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "chgeaenckaqborzpomkn.supabase.co"
    ],
  }
}

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://spotify-clone-nine-flame.vercel.app/',
        permanent: false, // set to true for permanent redirect (301), false for temporary redirect (302)
      },
      // Add more redirects for other routes if needed
    ];
  },
};

module.exports = nextConfig
