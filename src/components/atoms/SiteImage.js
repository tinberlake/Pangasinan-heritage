// Image atom. Always needs width and height so the page does not jump
// while the image loads. Images are lazy loaded unless `priority` is set
// (use priority for the one big image at the top of a page).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function SiteImage({ src, alt, width = 800, height = 500, priority = false }) {
  return (
    <img
      className="site-image"
      src={`${basePath}${src}`}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
