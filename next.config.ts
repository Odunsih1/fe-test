import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {

    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(

      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, 
      },

      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              prettier: false,
              svgo: false,
              svgoConfig: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                ],
              },
              titleProp: true,
              ref: true,
            },
          },
        ],
      }
    );


    fileLoaderRule.test = /\.(png|jpe?g|gif|webp|avif|ico|bmp)$/i;

    return config;
  },
};

export default nextConfig;