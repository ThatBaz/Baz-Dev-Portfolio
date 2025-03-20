// filepath: next.config.js
module.exports = {
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /\.glb$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'static/assets/3d/',
              publicPath: '/_next/static/assets/3d/',
            },
          },
        ],
      });
  
      return config;
    },
  };