// Import the MiniCssExtractPlugin
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

/**
 * The generics are for autocomplete purposes only. They are not used in the code.
 * 
 * @template {import('next').NextConfig} T 
 * @param {T} config - a generic parameter that flows through to the return type
 * @constraint {{import ('next').NextConfig} T}
 **/

function defineNextConfig(config: {
    reactStrictMode: boolean;
    // swcMinify: true,
    webpack(config: { module: { rules: { test: RegExp; use: { loader: string; options: { icon: boolean; }; }[]; }[]; }; plugins: MiniCssExtractPlugin[]; }, { isServer }: never): { module: { rules: { test: RegExp; use: { loader: string; options: { icon: boolean; }; }[]; }[]; }; plugins: MiniCssExtractPlugin[]; };
  }) {
  return config;
}

export default defineNextConfig({
  reactStrictMode: true,
  // swcMinify: true,

  webpack(config: { module: { rules: { test: RegExp; use: { loader: string; options: { icon: boolean; }; }[]; }[]; }; plugins: MiniCssExtractPlugin[]; }, { isServer }: never) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    });

    // Add MiniCssExtractPlugin only on the client-side
    if (!isServer) {
      config.plugins.push(new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash].css',
        chunkFilename: 'static/css/[id].[contenthash].css',
      }));
    }

    return config;
  },
});
