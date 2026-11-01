import Link from "next/link";
import { notFound } from "next/navigation";
import { sites, getSiteBySlug } from "../../../../data/sites";
import SiteImage from "../../../components/atoms/SiteImage";
import Icon from "../../../components/atoms/Icon";
import { Heading, Text } from "../../../components/atoms/Typography";

// With a static export, every page must be known at build time.
export function generateStaticParams() {
  return sites.map((site) => ({ slug: site.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }) {
  const site = getSiteBySlug(params.slug);
  if (!site) return {};
  return { title: site.name, description: site.summary };
}

export default function SiteDetailPage({ params }) {
  const site = getSiteBySlug(params.slug);
  if (!site) notFound();

  return (
    <article>
      <SiteImage src={site.image} alt={site.imageAlt} width={1200} height={750} priority />
      <div className="container">
        <div className="detail__body">
          <Link href="/#sites" className="back-link">
            <Icon name="arrow" size={18} />
            Back to all sites
          </Link>

          <Heading level={1}>{site.name}</Heading>
          <div className="detail__meta">
            <span className={`badge badge--${site.category.toLowerCase()}`}>{site.category}</span>
            <p className="detail__location">
              <Icon name="pin" size={18} />
              {site.location}
            </p>
          </div>

          <Text>{site.description}</Text>

          <div className="detail__box">
            <Heading level={2} size="md">
              Visitor tip
            </Heading>
            <Text>{site.tip}</Text>
          </div>

          {site.contact && (
            <Text muted small>
              Contact: {site.contact}
            </Text>
          )}
        </div>
      </div>
    </article>
  );
}
