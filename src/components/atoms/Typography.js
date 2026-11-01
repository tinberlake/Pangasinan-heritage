// Typography atoms: Heading and Text.
// `level` is the real HTML tag (h1-h6), `size` is only how big it looks.
// This keeps the heading order correct for screen readers.

const defaultSizes = { 1: "xl", 2: "lg", 3: "md", 4: "md", 5: "sm", 6: "sm" };

export function Heading({ level = 2, size, children, light = false }) {
  const Tag = `h${level}`;
  const look = size || defaultSizes[level];
  return <Tag className={`heading heading--${look}${light ? " heading--light" : ""}`}>{children}</Tag>;
}

export function Text({ children, muted = false, small = false }) {
  const className = `text${muted ? " text--muted" : ""}${small ? " text--small" : ""}`;
  return <p className={className}>{children}</p>;
}
