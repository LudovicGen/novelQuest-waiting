module.exports = {
  // ...
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(mp4|webm)$/i,
        use: {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/videos/",
            outputPath: "static/videos/",
            name: "[name].[hash].[ext]",
            esModule: false,
          },
        },
      });
    }
    return config;
  },
  // ...
};
