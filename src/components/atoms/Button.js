import Link from "next/link";

// Button atom. Pass `href` to get a link that looks like a button.
// variant: "primary" | "secondary" | "accent"
export default function Button({ children, href, variant = "primary", type = "button", onClick }) {
  const className = `btn btn--${variant}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
