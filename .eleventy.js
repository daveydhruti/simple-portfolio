module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");

  // Use JSON data files from _data directory
  eleventyConfig.addDataExtension("json", (contents) => JSON.parse(contents));

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};
