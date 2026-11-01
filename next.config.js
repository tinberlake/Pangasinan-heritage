// Static export: `npm run build` creates plain HTML files in the "out" folder.
// NEXT_PUBLIC_BASE_PATH is only needed when hosting under a sub-path
// (for example GitHub Pages: /repository-name). Leave it empty for local use.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

module.exports = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};
