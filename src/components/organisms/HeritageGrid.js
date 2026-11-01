import HeritageCard from "../molecules/HeritageCard";

// List of Heritage Cards. The number of columns is handled in organisms.css.
export default function HeritageGrid({ sites }) {
  if (sites.length === 0) {
    return <p className="empty-state">No heritage sites match your search. Try a different name or category.</p>;
  }

  return (
    <ul className="heritage-grid">
      {sites.map((site) => (
        <li key={site.slug}>
          <HeritageCard site={site} />
        </li>
      ))}
    </ul>
  );
}
