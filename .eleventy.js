module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/admin/config.yml");
  eleventyConfig.setDataDeepMerge(true);

  // Deja solo los dígitos de un teléfono para armar el link de WhatsApp (wa.me).
  eleventyConfig.addFilter("soloDigitos", function (valor) {
    return String(valor || "").replace(/\D/g, "");
  });

  eleventyConfig.addCollection("proyectos", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/proyectos/*.md").sort(function (a, b) {
      return (a.data.orden || 0) - (b.data.orden || 0);
    });
  });

  return {
    dir: { input: "src", output: "_site", includes: "_includes" },
  };
};
