module.exports = {
  presets: ["@babel/preset-env"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          // "~root": "./",
          "~": "./",
          "~locales": "./src/locales/",
        },
      },
    ],
  ],
};
