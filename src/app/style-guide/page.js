import Button from "../../components/atoms/Button";
import Icon from "../../components/atoms/Icon";
import SiteImage from "../../components/atoms/SiteImage";
import ColorSwatch from "../../components/atoms/ColorSwatch";
import { Heading, Text } from "../../components/atoms/Typography";

export const metadata = {
  title: "Style guide",
  description: "Atoms used in the Pangasinan Heritage Digital Showcase.",
};

const colors = [
  { name: "Primary", variable: "--color-primary", hex: "#0B5D6B" },
  { name: "Primary dark", variable: "--color-primary-dark", hex: "#083F49" },
  { name: "Accent", variable: "--color-accent", hex: "#E0A526" },
  { name: "Background", variable: "--color-bg", hex: "#FBF8F2" },
  { name: "Text", variable: "--color-text", hex: "#1F2A30" },
  { name: "Muted text", variable: "--color-muted", hex: "#52606A" },
  { name: "Natural", variable: "--color-natural", hex: "#1D6B3A" },
  { name: "Historical", variable: "--color-historical", hex: "#8A4B12" },
  { name: "Religious", variable: "--color-religious", hex: "#5B3A8C" },
];

export default function StyleGuidePage() {
  return (
    <div className="container section">
      <Heading level={1}>Style guide</Heading>

      <section className="guide-group">
        <Heading level={2}>Color tokens</Heading>
        <div className="swatch-grid">
          {colors.map((color) => (
            <ColorSwatch key={color.variable} {...color} />
          ))}
        </div>
      </section>

      <section className="guide-group">
        <Heading level={2}>Typography</Heading>
        <Heading level={1}>Heading level 1</Heading>
        <Heading level={2}>Heading level 2</Heading>
        <Heading level={3}>Heading level 3</Heading>
        <Text>Body text looks like this. It uses the system font to keep the page light.</Text>
        <Text muted small>
          Small muted text for extra details.
        </Text>
      </section>

      <section className="guide-group">
        <Heading level={2}>Buttons</Heading>
        <div className="guide-row">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="accent">Accent</Button>
        </div>
      </section>

      <section className="guide-group">
        <Heading level={2}>Icons</Heading>
        <div className="guide-row">
          <Icon name="pin" size={28} />
          <Icon name="search" size={28} />
          <Icon name="menu" size={28} />
          <Icon name="close" size={28} />
          <Icon name="arrow" size={28} />
        </div>
      </section>

      <section className="guide-group">
        <Heading level={2}>Image</Heading>
        <SiteImage
          src="/images/hundred-islands.svg"
          alt="Green islets rising from calm blue water"
          width={640}
          height={400}
        />
      </section>
    </div>
  );
}
