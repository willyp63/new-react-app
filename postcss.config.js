const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");
module.exports = {
  plugins: [
    tailwindcss("./tailwind.config.js"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production"
      ? [
          purgecss({
            content: ["./src/**/*.jsx", "./public/index.html"],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_://]+/g) || []
          }),
          require("cssnano")({
            preset: "default"
          })
        ]
      : [])
  ]
};
