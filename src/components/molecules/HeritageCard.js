import Link from "next/link";
import SiteImage from "../atoms/SiteImage";
import Icon from "../atoms/Icon";
import { Heading } from "../atoms/Typography";

// Preview of one heritage site. The whole card is clickable because the
// link in the title is stretched over the card with CSS (.heritage-card__link::after).
export default function HeritageCard({ site }) {
  return (
    <article className="heritage-card">
      <SiteImage src={site.image} alt={site.imageAlt} width={640} height={400} />
      <div className="heritage-card__body">
        <span className={`badge badge--${site.category.toLowerCase()}`}>{site.category}</span>
        <Heading level={3} size="md">
          <Link href={`/sites/${site.slug}/`} className="heritage-card__link">
            {site.name}
          </Link>
        </Heading>
        <p className="heritage-card__location">
          <Icon name="pin" size={16} />
          {site.location}
        </p>
        <p className="heritage-card__summary">{site.summary}</p>
      </div>
    </article>
  );
}
