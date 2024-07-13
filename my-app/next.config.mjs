/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React Strict Mode
    reactStrictMode: true,
  
    // Add custom Webpack configuration
    webpack: (config, { isServer }) => {
      // Example: add an alias to mock `fs` during client-side builds
      if (!isServer) {
        config.resolve.alias.fs = false;
      }
  
      return config;
    },
  
    // Add more custom configurations here if needed
  };
  
  export default nextConfig;
  