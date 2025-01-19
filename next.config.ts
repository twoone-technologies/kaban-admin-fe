import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { NextConfig } from 'next';

const config: NextConfig = {
  reactStrictMode: true,
  
  // Explicitly define a valid redirects function
  async redirects() {
    return [
      // Example of a valid redirect; update with your actual requirements
      {
        source: '/old-route',
        destination: '/new-route',
        permanent: true, // HTTP 308 for permanent redirects
      },
    ];
  },

  webpack: (config, { isServer }) => {
    // Add SVGR loader for SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    });

    if (!isServer) {
      // Add MiniCssExtractPlugin only for client-side builds
      config.plugins = [
        ...(config.plugins || []),
        new MiniCssExtractPlugin({
          filename: 'static/css/[name].[contenthash].css',
          chunkFilename: 'static/css/[id].[contenthash].css',
        }),
      ];
    }

    return config;
  },
};

export default config;
