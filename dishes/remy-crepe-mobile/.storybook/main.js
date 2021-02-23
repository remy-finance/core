module.exports = {
  stories: ["../src/**/*.stories.[tj]s", "../src/**/storybook.tsx"],
  webpackFinal: (config) => {
    config.resolve.extensions = [".web.js", ".js", ".json", ".web.jsx", ".jsx"];

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]],
      },
    });
    config.resolve.alias = {
      "react-native$": require.resolve("react-native-web"),
    };
    config.resolve.extensions.push(".ts", ".tsx");

    config.module.rules.push({
      test: /\.(js|jsx)$/,

      use: [
        {
          loader: require.resolve("babel-loader"),
        },
      ],
    });

    return config;
  },
};
