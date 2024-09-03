/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-var-requires */

const _path = require('path');

const _isProduction = process.env.ENVIRONMENT === 'production';

const nextConfig = () => {
    return {
        webpack(config, { dev: _isDevelopment }) {
            return config;
        },
        eslint: {
            dirs: ['pages', 'src']
        },
        images: {
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'gannett-cdn.com'
                }
            ]
        },
        swcMinify: true,
        poweredByHeader: false,
        reactStrictMode: true
    };
};

module.exports = nextConfig();

// TODO: complex
// const path = require('path');
// const loaderUtils = require('loader-utils');
// const StyleLintPlugin = require('stylelint-webpack-plugin');

// const isProduction = process.env.ENVIRONMENT === 'production';
// const remotePatterns = [
//     {
//         protocol: 'https',
//         hostname: 'gannett-cdn.com'
//     },
//     {
//         protocol: 'https',
//         hostname: 'www.gannett-cdn.com'
//     }
// ];

// const assetPrefix = '/elections';

// const regexEqual = (x, y) => {
//     return (
//         x instanceof RegExp &&
//         y instanceof RegExp &&
//         x.source === y.source &&
//         x.global === y.global &&
//         x.multiline === y.multiline &&
//         x.ignoreCase === y.ignoreCase
//     );
// };

// const cssLoaderOptions = (modules, isDevelopment) => {
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const { getLocalIdent, ...others } = modules;

//     return {
//         ...others,
//         getLocalIdent: getCustomLocalIdent,
//         exportLocalsConvention: 'asIs',
//         localIdentName: !isDevelopment ? '[hash:base64:6]__[hash:base64:6]' : '[name]__[local]--[hash:base64:12]'
//     };
// };

// const getCustomLocalIdent = (loaderContext, localIdentName, localName, options) => {
//     if (!options.context) {
//         options.context = loaderContext.rootContext;
//     }

//     // prettier-ignore
//     const request = path.relative(options.context, loaderContext.resourcePath)
//                         .replace(/\\/g, '/');

//     options.content = `${options.hashPrefix + request}+${localName}`;
//     localIdentName = localIdentName.replace(/\[local\]/gi, localName);

//     const hash = loaderUtils.interpolateName(loaderContext, localIdentName, options);

//     // eslint-disable-next-line prefer-regex-literals
//     return hash.replace(new RegExp('[^a-zA-Z0-9\\-_\u00A0-\uFFFF]', 'g'), '-').replace(/^((-?[0-9])|--)/, '_$1');
// };

// const nextConfig = () => {
//     return {
//         webpack(config, { dev: isDevelopment }) {
//             config.plugins.push(new StyleLintPlugin({ context: './styles', failOnError: !isDevelopment }));

//             const oneOf = config.module.rules.find(rule => typeof rule.oneOf === 'object');

//             if (oneOf) {
//                 const moduleSassRule = oneOf.oneOf.find(rule => regexEqual(rule.test, /\.module\.(scss|sass)$/));

//                 if (moduleSassRule) {
//                     const cssLoader = moduleSassRule.use.find(({ loader }) => loader.includes('/css-loader'));

//                     if (cssLoader) {
//                         cssLoader.options = {
//                             ...cssLoader.options,
//                             modules: cssLoaderOptions(cssLoader.options.modules, isDevelopment)
//                         };
//                     }
//                 }
//             }

//             const customConfigRules = [
//                 {
//                     test: /\.svg$/i,
//                     issuer: /\.[jt]sx?$/,
//                     resourceQuery: { not: [/url/] },
//                     use: ['@svgr/webpack']
//                 },
//                 {
//                     test: /\.svg$/i,
//                     type: 'asset',
//                     resourceQuery: /url/,
//                     generator: {
//                         dataUrl: {
//                             encoding: false
//                         }
//                     }
//                 }
//             ];

//             for (let i = 0; i < customConfigRules.length; i++) {
//                 config.module.rules.push(customConfigRules[i]);
//             }

//             return config;
//         },
//         eslint: {
//             dirs: ['pages', 'src']
//         },
//         images: {
//             remotePatterns
//         },
//         swcMinify: true,
//         poweredByHeader: false,
//         reactStrictMode: false,
//         assetPrefix,
//         basePath: assetPrefix,
//         output: 'standalone', // https://nextjs.org/docs/pages/api-reference/next-config-js/output#automatically-copying-traced-files
//         experimental: {
//             instrumentationHook: true // https://nextjs.org/docs/pages/building-your-application/optimizing/open-telemetry
//         },
//         compiler: {
//             removeConsole: false
//         }
//     };
// };

// const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: isProduction });

// module.exports = withBundleAnalyzer(nextConfig());

// TODO: simple
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     experimental: {
//         appDir: true
//     }
// };

// export default nextConfig;
