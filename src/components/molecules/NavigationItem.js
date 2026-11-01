import Link from "next/link";

// One link inside the main menu. `active` marks the page the visitor is on.
export default function NavigationItem({ href, children, active = false, onClick }) {
  return (
    <li className="nav-item">
      <Link
        href={href}
        className={`nav-item__link${active ? " nav-item__link--active" : ""}`}
        aria-current={active ? "page" : undefined}
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );
}
