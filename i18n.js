module.exports = {
  locales: ["en", "ku"],
  defaultLocale: "ku",
  localeDetection: true,
  pages: {
    "*": ["common"],
    "/": ["home"],

    // when other pages added, Add their locale json file here.
  },
  // rest of config here...
};
