/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            prettier: false,
            svgo: true,
            titleProp: true,
            svgoConfig: {
              plugins: [
                // - removeRasterImages

                { name: 'cleanupIDs', active: false },
                { name: 'cleanupAttrs', active: false },
                { name: 'removeViewBox', active: false },
                { name: 'removeAttrs', active: false },
                { name: 'removeComments', active: false },
                { name: 'removeDesc', active: false },
                { name: 'removeDimensions', active: false },
                { name: 'removeDoctype', active: false },
                { name: 'removeEditorsNSData', active: false },
                { name: 'removeElementsByAttr', active: false },
                { name: 'removeEmptyAttrs', active: false },
                { name: 'removeEmptyContainers', active: false },
                { name: 'removeEmptyText', active: false },
                { name: 'removeHiddenElems', active: false },
                { name: 'removeMetadata', active: false },
                { name: 'removeNonInheritableGroupAttrs', active: false },
                { name: 'removeStyleElement', active: false },
                { name: 'removeTitle', active: false },
                { name: 'removeUnknownsAndDefaults', active: false },
                { name: 'removeUnusedNS', active: false },
                { name: 'removeUselessDefs', active: false },
                { name: 'removeUselessStrokeAndFill', active: false },
                { name: 'removeViewBox', active: false },
                { name: 'removeXMLNS', active: false },
                { name: 'removeXMLProcInst', active: false },
              ],
            },
          },
        },
      ],
    });
    return config;
  },
};
module.exports = withBundleAnalyzer(nextConfig);
